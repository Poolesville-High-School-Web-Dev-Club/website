export default function FAQ({ setShowJoinModal }) {
    return (
        <div className='w-1/2' id='faq'>
            <h1 className='text-4xl font-bold text-center'>FAQ</h1>
            <div className="px-32 mt-4 leading-10">
                <h3>What do we do?</h3>
                <p>We teach website development skills and build functional and stylish websites.</p>
                <h3>Does it cost money?</h3>
                <p>No. We may even pay you!</p>
                <h3>Do I need any experience?</h3>
                <p>No.</p>
                <h3>Is it too late to join?</h3>
                <p>It is never too late. Join <span onClick={() => setShowJoinModal(true)} className="cursor-pointer text-secondary">here.</span></p>
            </div>
        </div>
    )
}