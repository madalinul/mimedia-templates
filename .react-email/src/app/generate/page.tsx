import { render } from '@react-email/render';
import { promises as fs } from 'fs';
import { getEmails } from '../../utils/get-emails';
import { Generate } from './generate';

const partners = [
  { name: 'mimedia', languages: ['en'] },
  { name: 'orbic', languages: ['en', 'ja', 'es-MX'] },
];

export default async function Page() {
  const { emails } = await getEmails();

  let htmlLinks = '';
  for (const partnerObj of partners) {
    const partner = partnerObj.name;
    htmlLinks += `<div><h1>${partner}</h1><div style='display:flex;gap:1rem'>`;
    for (const language of partnerObj.languages) {
      htmlLinks += `<div><h4 style='text-align:center'>${language}</h4><ul>`;
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

        const htmlLink = `/templates/${partner}/html/${language}/${email}_${language}.html`;
        htmlLinks += `<li><div style="display:flex;flex-direction:row;gap:1rem;justify-content:space-between;"><a href='${htmlLink}'>${email}</a><a href='${htmlLink}' download>.html</a><a href='/templates/${partner}/text/${language}/${email}_${language}.txt'>.txt</a></div></li>`;
        await fs.writeFile(
          `../templates/${partner}/html/${language}/${email}_${language}.html`,
          markup,
          function (err) {
            if (err) throw err;
            console.log('Replaced!');
          },
        );
        await fs.writeFile(
          `../templates/${partner}/text/${language}/${email}_${language}.txt`,
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
