import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return <div>
        <Header />
        <div className="bg-white_smoke">
        <div className="m-auto max-w-2xl p-5">{children}</div>
        </div>
    </div>
}