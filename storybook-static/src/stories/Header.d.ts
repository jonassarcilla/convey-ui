type User = {
    name: string;
};
interface HeaderProps {
    user?: User;
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
declare function Header({ user, onLogin, onLogout, onCreateAccount }: HeaderProps): import("react/jsx-runtime").JSX.Element;
export default Header;
