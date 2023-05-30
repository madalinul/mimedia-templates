import { render } from '@react-email/render';
import { promises as fs } from 'fs';
import { getEmails } from '../utils/get-emails';
import Home from './home';

export default async function Index() {
  const { emails, filenames } = await getEmails();

  for (const email of emails) {
    const Email = (await import(`../../../emails/${email}`)).default;
    const markup = render(<Email />, { pretty: true });
    const plainText = render(<Email />, { plainText: true });
    await fs.writeFile(
      `/Users/madalin/dev/mimedia-templates/templates/html/${email}.html`,
      markup,
      function (err) {
        if (err) throw err;
        console.log('Replaced!');
      },
    );
    await fs.writeFile(
      `/Users/madalin/dev/mimedia-templates/templates/text/${email}.txt`,
      plainText,
      function (err) {
        if (err) throw err;
        console.log('Replaced!');
      },
    );
  }

  return <Home navItems={emails} />;
}

export const metadata = {
  title: 'React Email',
};
