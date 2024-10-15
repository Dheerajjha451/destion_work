
interface ProtectedLayoutProps {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return ( 
    <div className="max-h-full">
      {children}
    </div>
   );
}
 
export default ProtectedLayout;