function _createNodal(option) {
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin',`
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <span class="modal-title">Modal title</span>
                <span class="modal-close" onclick="modal.close()">&times;</span>
            </div>
            <div class="modal-body">
                <p>harum laboriosam libero modi</p>
                <p>harum laboriosam libero modi</p>
            </div>
            <div class="modal-footer">
                <button>OK</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>
    `)
    document.body.appendChild(modal)
    return modal
}

$.modal = function (options) {
    const animationSpeed = 1000
    const $modal = _createNodal(options)
    return{
        open() {
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(()=>{
                $modal.classList.remove('hide')
            }, animationSpeed)
        },
        destroy() {}

    }
}