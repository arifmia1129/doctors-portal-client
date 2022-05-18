import { toast } from 'react-toastify';
const DeleteModal = ({ deleteDoctor, refetch, setLoading, setDeleteDoctor }) => {
    const handleDelete = doctor => {
        setLoading(true);
        fetch(`https://lit-inlet-69073.herokuapp.com/doctor/${doctor?.email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                if (data.deletedCount) {
                    toast.success(`Doctor : ${doctor?.name} is deleted successfully!`);
                    refetch();
                    setDeleteDoctor(null);
                }
                else {
                    toast.error("Delete operation is failed!")
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure delete this doctor from here?</h3>
                    <p className="py-4">If you delete this doctor you will not access or display her/his information!</p>
                    <div className="modal-action">
                        <label onClick={() => handleDelete(deleteDoctor)} htmlFor="my-modal" className="btn btn-error text-white font-bold">Yes</label>
                        <label htmlFor="my-modal" className="btn btn-success text-white font-bold">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;