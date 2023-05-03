import Tile from "./Tile";
export default function TileList({...props}) {
    const {data, isEditing, onEdit, onDelete, onEditAnimation} = props;
    const tiles = data.map((c, i) => (
            <Tile
                key={i}
                values={c}
                isEditing={isEditing}
                onEdit={onEdit}
                onEditAnimation={onEditAnimation}
                onDelete={onDelete}>
            </Tile>
    ));

    return(
        <div className="row g-2">
            {tiles}
        </div>
    )
}