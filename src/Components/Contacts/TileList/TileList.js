import Tile from "./Tile";

export default function TileList({...props}) {
    const {data, isEditing, onEdit, onDelete, onEditAnimation} = props;
    const tiles = data.map((c, i) => (
        <div key={i} className="col-12 col-sm-6 col-lg-4 col-xxl-3">
            <Tile 
                values={c}
                isEditing={isEditing}
                onEdit={onEdit}
                onEditAnimation={onEditAnimation}
                onDelete={onDelete}>
            </Tile>
        </div>
    ));

    return(
        <div className="row g-2">
            {tiles}
        </div>
    )
}