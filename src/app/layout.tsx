import NormalRequestButton from "../components/NormalRequestButton";
import HugeRequestButton from "../components/HugeRequestButton";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <div style={{display: "flex", justifyContent: "space-between", width: "500px"}}>
            <NormalRequestButton/>
            <HugeRequestButton/>
        </div>
        </body>
        </html>
    )
}