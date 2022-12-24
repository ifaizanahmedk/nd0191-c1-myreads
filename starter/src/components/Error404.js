import { Link } from "react-router-dom";

const Error404 = () => {
	return (
		<div>
			<Link to="/" className="xmark">
				<div
					style={{
						fontSize: "30px",
						textAlign: "right",
						marginRight: "20px",
					}}>
					&times;
				</div>
			</Link>
			<h1 style={{ textAlign: "center" }}>404 Not Found!</h1>
		</div>
	);
};

export default Error404;
