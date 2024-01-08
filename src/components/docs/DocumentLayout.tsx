export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return <div>
        <div>
            <div className="m-auto max-w-2xl p-5">{children}</div>
        </div>
    </div>
}