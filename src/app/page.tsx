import { headers } from 'next/headers';
import { bodyStyle, debugTestStyle } from './page-style.css';

export default async function Page() {
  const h = await headers();
  const requestHeaders: Record<string, string>[] = [];
  h.forEach((value, key) => {
    requestHeaders.push({ key, value });
  });

  return (
    <html lang="en">
      <body className={bodyStyle}>
        <div>
          <h1>Test</h1>
          <div>
            <ul className={debugTestStyle}>
              {requestHeaders.map(({ key, value }) => (
                <li id={`header-${key}`} key={key}>
                  <strong>{key}</strong>: <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
