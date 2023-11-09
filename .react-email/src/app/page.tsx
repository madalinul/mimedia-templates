import { render } from '@react-email/render';
import { promises as fs } from 'fs';
import { getEmails } from '../utils/get-emails';
import Home from './home';

const partners = ['mimedia', 'orbic'];

export default async function Index() {
  const { emails } = await getEmails();

  console.log('write emails');

  for (const partner of partners) {
    for (const email of emails) {
      const Email = (await import(`../../../emails/${email}`)).default;
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

  return <Home navItems={emails} />;
}

export const metadata = {
  title: 'React Email',
};
