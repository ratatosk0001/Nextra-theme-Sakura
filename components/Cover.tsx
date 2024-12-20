import Information from "./Information";

export default function Cover() {
    return (
        <section>
            <figure className="p-0 m-0 h-screen relative flex justify-center items-center rounded-b-2xl bg-[url('https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75')] bg-[top_center] bg-no-repeat bg-scroll bg-cover before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-b-2xl before:bg-[url('/dot.gif')]">
                <Information></Information>
            </figure>
        </section>
    );
}
