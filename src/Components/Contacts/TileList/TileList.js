import Tile from "./Tile";
import { useContacts } from "../ContactsContext";
export default function TileList({...props}) {
    const contacts = useContacts();
    const {onEditAnimation} = props;
    const tiles = contacts.map((c, i) => (
            <Tile
                key={i}
                values={c}
                onEditAnimation={onEditAnimation}>
            </Tile>
    ));

    return(
        <div className="row g-2">
            {tiles}
        </div>
    )
}