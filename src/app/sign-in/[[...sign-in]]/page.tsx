// app/page.tsx

import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <main>
            <SignIn />
        </main>
    );
}
