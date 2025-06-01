
export const Card = ({ children, ...props }) => (
  <div className="rounded-2xl shadow-lg p-4 bg-white" {...props}>
    {children}
  </div>
);

export const CardContent = ({ children, ...props }) => (
  <div {...props}>{children}</div>
);
