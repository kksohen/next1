//app > page, layout, not-found.tsx는 필수항목ㅇ

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Not Found",
};

export default function NotFound() {
    return (
        <div>Not Found</div>
    );
};