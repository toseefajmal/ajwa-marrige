
const AdminFooter = () => {
  return (
    <footer className="bg-white border-t border-[#e8e0d2] px-6 md:px-10 py-6">

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="text-xs text-[#716b60]">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[#a77d32]">
              Ajwa Marriage Hall
            </span>
            . All Rights Reserved.
          </p>

          <p className="text-[10px] text-[#a39a8b] mt-1">
            Marriage Hall Management System
          </p>
        </div>

        {/* Footer Branding */}
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg tracking-[3px] text-[#a77d32]">
            AJWA
          </span>

          <span className="w-px h-5 bg-[#e2d8c5]"></span>

          <span className="text-[10px] uppercase tracking-[1.5px] text-[#817968]">
            Admin Panel
          </span>
        </div>

      </div>

    </footer>
  );
};

export default AdminFooter;
