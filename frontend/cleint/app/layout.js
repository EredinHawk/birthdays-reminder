import './globals.css'

export const metadata = {
    title: 'Birthdays Reminder',
  }
  
export default function RootLayout({ children }) {
    return (
        <html lang='ru'>
            <body>
                {children}
            </body>
        </html>
    );
}