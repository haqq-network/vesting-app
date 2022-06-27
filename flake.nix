{
  inputs = {
    nixpkgs.url = github:NixOS/nixpkgs/nixpkgs-unstable;

    flake-utils = {
      url = "github:numtide/flake-utils";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    flake-compat = {
      url = "github:edolstra/flake-compat";
      inputs.nixpkgs.follows = "nixpkgs";
      flake = false;
    };
  };

  outputs = { self, nixpkgs, flake-utils , ... }@inputs:
    flake-utils .lib.eachDefaultSystem (system:
      let
        inherit (pkgs) mkShell;

        overlays = [];
        pkgs = import nixpkgs { 
          inherit system overlays; 
        };
      in
      {
        devShell = pkgs.mkShell (
          {
            buildInputs = with pkgs; [
              werf
              yarn
              nodejs
            ];

            WERF_PLATFORM="linux/amd64";
          } 
        );
      }
    );
}
