{ pkgs }: {
	deps = [
		pkgs.jre_minimal
  pkgs.zulu
  pkgs.maven
  pkgs.nodejs-16_x
		pkgs.nodePackages.typescript-language-server
		pkgs.yarn
		pkgs.replitPackages.jest
	];
}