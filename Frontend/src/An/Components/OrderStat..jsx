export default function OrderStatCard({ title, count }) {
    return (
        <div className='border rounded-3 p-2 flex-grow-1'>
            <h4 className='fw-bold fs-4 fs-md-5'>{title}</h4>
            <p>{count}</p>
        </div>
    );
}
