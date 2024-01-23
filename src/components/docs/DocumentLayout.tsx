export default function MdxLayout({ children }: { children: React.ReactNode }) {
    // Create any shared layout or styles here
    return <div>
        <div>
            <div className="m-auto max-w-2xl p-5 my-8">
                <div className="my-8">{children}</div>
            </div>
        </div>
    </div>
}
