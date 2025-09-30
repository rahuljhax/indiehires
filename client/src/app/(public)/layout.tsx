import Header from "../components/common/Header/Header";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
export default PublicLayout;