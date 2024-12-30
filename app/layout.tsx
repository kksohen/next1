//상위폴더에 layout.tsx 파일 생성 시 하위 페이지들에 전부 레이아웃 렌더됨ㅇ 중첩가능ㅇ
import { Metadata } from "next";
import Navigation from "../components/navigation";
import "../styles/global.css";

export const metadata : Metadata = {
  title: {
    template: '%s | Next', //%s는 문자열ㅇ
    default: 'Next',
  },
  description: 'my first next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}