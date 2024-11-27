import qrCode from "../../assets/QRcode.png"

export const QRCodeContribution = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 h-[80vh] sm:h-[50vh] lg:h-[80vh] px-4 bg-gradient-to-r from-[#FFDDCB] to-[#FFBE9A]">
      <div className="text-center mb-4">
        <p className="text-lg font-medium">
          To make your contribution, <br /> please scan the QR
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src={qrCode}
          alt="QR Code"
          className="w-56 h-56"
        />
      </div>
    </div>
  );
};
