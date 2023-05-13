declare module "*.png";
declare module "*.css";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      dialog: React.DetailedHTMLProps<
        React.DialogHTMLAttributes<HTMLDialogElement>,
        HTMLDialogElement
      >;
    }
  }
}
