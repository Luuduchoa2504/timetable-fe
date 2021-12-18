export class Buoi {
    id: number;
    soTiet: number;
    batDauLuc: number;
    tietBatDau: number;
    giangVien: string;
    phong: string;
}

export class NhomMonHoc {
    id: string;
    phong: string;
    nmh: string;
    monHocId: number;
    monHoc: MonHoc;
    buois: Buoi[];
}

export class MonHoc {
    id: number;
    ten: string;
    maMonHoc: string;
    soTinChi: number;
    nhomMonHoc: NhomMonHoc[];
    isActive = false;
}
