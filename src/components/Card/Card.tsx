import { ReactNode } from "react";

/**
 * Props for the Card component.
 * 
 * @param title - The title of the card.
 * @param children - The content to be displayed inside the card.
 */
interface CardProps {
    title: string;
    children: ReactNode;
}

/**
 * Used to layout 2-wide column cards with title and content
 * transitions to 1-wide on mobile
 * @component
 * @example
 * return (
 *   <Card title="Sample Title">
 *     <p>This is a sample content.</p>
 *   </Card>
 * )
 */
const Card: React.FC<CardProps> = ({ title, children }) => (
    <div className="col-span-2 md:col-span-1 border">
        <div className="">
            <div className="m-4">
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    </div>
);

export default Card;