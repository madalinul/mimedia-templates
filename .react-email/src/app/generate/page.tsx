import { render } from '@react-email/render';
import { promises as fs } from 'fs';
import path from 'path';
import { getEmails } from '../../utils/get-emails';
import { Generate } from './generate';

const partners = [
  { name: 'mimedia', languages: ['en'] },
  { name: 'orbic', languages: ['en', 'ja', 'es-MX'] },
  { name: 'tmcell', languages: ['en', 'es-MX'] },
  { name: 'pcd', languages: ['en', 'es-MX'] },
];

export default async function Page() {
  const { emails } = await getEmails();

  let htmlLinks = '';
  for (const partnerObj of partners) {
    const partner = partnerObj.name;
    htmlLinks += `<div><h1>${partner}</h1><div style='display:flex;gap:1rem'>`;
    for (const language of partnerObj.languages) {
      htmlLinks += `<div><h4 style='text-align:center'>${language}</h4><ul>`;
      const htmlDirectory = `../templates/${partner}/html/${language}/`;
      for (const file of await fs.readdir(htmlDirectory)) {
        try {
          await fs.unlink(path.join(htmlDirectory, file));
        } catch (err) {}
      }
      const txtDirectory = `../templates/${partner}/text/${language}/`;
      for (const file of await fs.readdir(txtDirectory)) {
        try {
          await fs.unlink(path.join(txtDirectory, file));
        } catch (err) {}
      }

      for (const email of emails) {
        const Email = (await import(`../../../../emails/${email}`)).default;
        const markup = render(<Email partner={partner} language={language} />, {
          pretty: true,
        });
        const plainText = render(
          <Email partner={partner} language={language} />,
          {
            plainText: true,
          },
        );

        const htmlLink = `./templates/${partner}/html/${language}/${email}.html`;
        htmlLinks += `<li><div style="display:flex;flex-direction:row;gap:1rem;justify-content:space-between;"><a href='${htmlLink}'>${email}</a><div style="display:flex;flex-direction:row;gap:0.5rem;justify-content:space-between;"><a href='${htmlLink}' download>.html</a><a href='./templates/${partner}/text/${language}/${email}.txt' download>.txt</a></div></div></li>`;
        await fs.writeFile(
          `../templates/${partner}/html/${language}/${email}.html`,
          markup,
          function (err) {
            if (err) throw err;
            console.log('Replaced!');
          },
        );
        await fs.writeFile(
          `../templates/${partner}/text/${language}/${email}.txt`,
          plainText,
          function (err) {
            if (err) throw err;
            console.log('Replaced!');
          },
        );
      }
      htmlLinks += `</ul></div>`;
    }
    htmlLinks += `</div></div>`;
  }

  createIndexFile(htmlLinks);

  return <Generate navItems={emails} />;
}

const createIndexFile = (linksContent) => {
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./styles/styles.css" />
    <title>Mimedia Templates</title>
  </head>
  <body>
    <ul>
      ${linksContent}
    </ul>
  </body>
  </html>
`;
  fs.writeFile('../index.html', htmlContent, (err) => {
    if (err) {
      console.error('Error writing index.html:', err);
    } else {
      console.log('index.html created successfully!');
    }
  });
};

export async function generateMetadata({ params }) {
  return { title: `Generate Templates` };
}
