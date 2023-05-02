export default function Tile({values, onEdit, onEditAnimation, onDelete, isEditing}) {
    return(
        <div class="card">
            <div class="card-body pb-0">
                <button type="button" class="btn btn-secondary btn-sm float-end ms-1"
                    disabled={isEditing ? true : false}
                    onClick={() => onDelete(values.id)}>
                    <i class="bi bi-trash3" title="Delete"></i>
                </button>
                <button type="button" class="btn btn-secondary btn-sm float-end"
                    disabled={isEditing ? true : false}
                    onClick={() => {onEdit(values); onEditAnimation()}}>
                    <i class="bi bi-pencil-square" title="Edit"></i>
                </button>
                <dl>
                <dt>Name:</dt>
                <dd>{values.name}</dd>

                <dt>E-mail:</dt>
                <dd>{values.email}</dd>

                <dt>Phone:</dt>
                <dd>{values.phone}</dd>
                </dl>
            </div>
        </div>
    );
}