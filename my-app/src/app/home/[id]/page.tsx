export default async function Page({ params }: any) {
    const { id } = await params;

    return (
        <div>
            <p>This is the home page of {id}</p>
        </div>
    );
}
