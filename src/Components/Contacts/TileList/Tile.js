export default function Tile({values, onEdit, onEditAnimation, onDelete, isEditing}) {
    return(
        <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card">
                <div class="card-body pb-0">
                    <button type="button" class="btn btn-secondary btn-sm float-end ms-1 " data-bs-toggle="modal" data-bs-target="#staticBackdrop" 
                        disabled={isEditing ? true : false}>
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
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-body">
                            This action cannot be undone. Are you sure you want to delete this contact?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                onClick={() => onDelete(values.id)}>
                                OK
                            </button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}