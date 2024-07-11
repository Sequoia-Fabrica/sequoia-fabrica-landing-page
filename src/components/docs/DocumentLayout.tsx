import Head from "next/head"


interface LayoutProps {
  children: React.ReactNode;
  metadata: { title?: string ; description?: string; };
}



export default function MdxLayout({ children, ...props}: LayoutProps ) {
    // Create any shared layout or styles here

    const { title, description } = props.metadata;
    const defaultTitle = title ? `${title} | Sequoia Fabrica` : "Sequoia Fabrica";
    const defaultDescription = description || "";

    // Create any shared layout or styles here
    return (    
    <div>
            <Head>
                    <title key="metatitle">{defaultTitle}</title>
                    <meta key="metadesc" name="description" content={defaultDescription} />
            </Head>
            <div>
                    <div className="m-auto max-w-2xl p-5 my-8">
                            <div className="my-8">{children}</div>
                    </div>
            </div>
    </div>)
}
