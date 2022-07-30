
export default function header(params) {
    return (
        <div className="header">
            <span className="logo">Shortly</span>

            <span>
                <ul className="header-menu">
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
            </span>
            <span>
                <ul className="header-login">
                    <li>Login</li>
                    <li>Signup</li>
                </ul>
            </span>
        </div>
    )
};