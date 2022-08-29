{ pkgs }: {
	deps = [
		pkgs.openssh_with_kerberos
  pkgs.openssh_with_kerberos
  pkgs.docker_compose
  pkgs.jre_minimal
  pkgs.zulu
  pkgs.maven
  pkgs.nodejs-16_x
		pkgs.nodePackages.typescript-language-server
		pkgs.yarn
		pkgs.replitPackages.jest
	];
}