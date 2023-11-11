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

  for (const partner of partners) {
    for (const email of emails) {
      const Email = (await import(`../../../../emails/${email}`)).default;
      const markup = render(<Email partner={partner} />, { pretty: true });
      const plainText = render(<Email partner={partner} />, {
        plainText: true,
      });
      await fs.writeFile(
        `../templates/${partner}/html/${email}.html`,
        markup,
        function (err) {
          if (err) throw err;
          console.log('Replaced!');
        },
      );
      await fs.writeFile(
        `../templates/${partner}/text/${email}.txt`,
        plainText,
        function (err) {
          if (err) throw err;
          console.log('Replaced!');
        },
      );
    }
  }

  return <Generate navItems={emails} />;
}

export async function generateMetadata({ params }) {
  return { title: `Generate Templates` };
}
