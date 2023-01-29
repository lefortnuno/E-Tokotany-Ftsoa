import getDataUtilisateur from "../../api/udata";

export default function ProfilSidebar() {
	const u_info = getDataUtilisateur();
	return (
		<>
			<div className="user">
				<div className="photo">
					<img
						src={
							process.env.PUBLIC_URL + `/picture/pdp/1671269107521-DSC_0101.JPG`
						}
						alt="photo de profile"
					/>
				</div>
				<div className="info">
					<a
						className=""
						data-toggle="collapse"
						href="#collapseExample"
						aria-expanded="true"
					>
						<span>
							{u_info.u_identification}
							<span className="user-level">{u_info.u_attribut}</span>
							{/* <span className="caret"></span> */}
						</span>
					</a>
					<div className="clearfix"></div>
				</div>
			</div>
		</>
	);
}
