function Main() {
    return (
        <div>
            <h3 className="p-2 text-bg-primary text-center">Featured Blogs</h3>
            <div className="row">
                <div className="pt-2 col text-center text-bg-primary">
                    <h3>Blog1</h3>
                    <p>Paragraph</p>
                    <p>Paragraph</p>
                </div>
                <div className="pt-2 col text-center text-bg-secondary">
                    <h3>Blog2</h3>
                    <p>Paragraph</p>
                    <p>Paragraph</p>
                </div>
                <div className="pt-2 col text-center text-bg-warning">
                    <h3>Blog3</h3>
                    <p>Paragraph</p>
                    <p>Paragraph</p>
                </div>
                <div className="pt-2 col text-center text-bg-success">
                    <h3>Blog4</h3>
                    <p>Paragraph</p>
                    <p>Paragraph</p>
                </div>
            </div>
        </div>
    );
}

export default Main;