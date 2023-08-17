{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  buildInputs = with pkgs;[
    rtx
    clj-kondo
    babashka
    joker
    rlwrap
  ];
  shellHook = ''
    zsh
  '';
}
