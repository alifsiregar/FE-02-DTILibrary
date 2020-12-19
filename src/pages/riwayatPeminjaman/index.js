import React, { useState, useEffect } from 'react';
import { pinjamService } from '../../services';

const RiwayatPinjam = () => {
  // eslint-disable-next-line no-unused-vars
  const [pinjam, setPinjam] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getPinjam = () => {
      pinjamService
        .getPinjam()
        .then((res) => {
          setPinjam(res);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    getPinjam();
  }, []);
  return (
    <div className="-my-2 py-2 overflow-x-auto">
      <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
        <div className="flex justify-between">
          <h2>Halaman Riwayat peminjaman</h2>
        </div>
      </div>
    </div>
  );
};

export default RiwayatPinjam;