export default function Page({ params }: { params: { id: string } }) {
    return (
        <div>
            <p>This is the home page of {params.params.id}</p>


        </div>
    );
}