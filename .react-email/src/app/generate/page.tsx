import { render } from '@react-email/render';
import { promises as fs } from 'fs';
import { getEmails } from '../../utils/get-emails';
import { Generate } from './generate';

const partners = [
  { name: 'mimedia', languages: ['en'] },
  { name: 'orbic', languages: ['en', 'ja'] },
];

export default async function Page() {
  const { emails } = await getEmails();

  for (const partnerObj of partners) {
    const partner = partnerObj.name;
    for (const language of partnerObj.languages) {
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
    }
  }

  return <Generate navItems={emails} />;
}

export async function generateMetadata({ params }) {
  return { title: `Generate Templates` };
}
