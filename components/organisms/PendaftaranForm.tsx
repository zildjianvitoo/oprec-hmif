"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";

const MAX_FILE_SIZE = 4000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const FormSchema = z.object({
  name: z.string().min(1, { message: "Nama tidak boleh kosong" }),
  nim: z.coerce
    .string()
    .regex(/^[0-9]*$/, { message: "NIM harus berupa angka" })
    .min(1, { message: "NIM tidak boleh kosong" }),
  email: z
    .string({ required_error: "Email tidak boleh kosong" })
    .email({ message: "Masukkan email yang valid" }),
  generation: z.string().min(1, "Angkatan tidak boleh kosong"),
  class: z.string({ required_error: "Kelas tidak boleh kosong" }),
  campusDomicile: z.string({
    required_error: "Domisili Kampus tidak boleh kosong",
  }),
  address: z.string().min(1, { message: "Alamat tidak boleh kosong" }),
  whatsappNumber: z.coerce
    .string()
    .regex(/^[0-9]*$/, { message: "No Whatsapp harus berupa angka" })
    .min(1, { message: "No Whatsapp tidak boleh kosong" }),
  idLine: z.string().min(1, { message: "ID Line tidak boleh kosong" }),
  division1: z.string({
    required_error: "Divisi 1 tidak boleh kosong",
  }),
  division2: z.string({
    required_error: "Divisi 2 tidak boleh kosong",
  }),
  reasonHMIF: z
    .string()
    .min(1, { message: "Alasan Bergabung HMIF tidak boleh kosong" }),
  reasonDivision1: z
    .string()
    .min(1, { message: "Field ini tidak boleh kosong" }),
  reasonDivision2: z
    .string()
    .min(1, { message: "Field ini tidak boleh kosong" }),

  kpm: z
    .instanceof(File)

    .refine((file) => file?.size <= MAX_FILE_SIZE, `Ukuran File terlalu besar.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Mohon upload file berformat .jpg, .jpeg, .png and .webp"
    ),

  isAgree: z.boolean(),
});

export default function PendaftaranForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      address: "",
      campusDomicile: "",
      class: "",
      division1: "",
      division2: "",
      email: "",
      generation: "",
      idLine: "",
      isAgree: false,
      name: "",
      nim: "",
      reasonDivision1: "",
      reasonDivision2: "",
      reasonHMIF: "",
      whatsappNumber: "",
      kpm: new File([], ""),
    },
  });

  function onSubmit(formValues: z.infer<typeof FormSchema>) {
    console.log(formValues);
  }

  return (
    <div className="flex flex-col ">
      <div className="px-3 py-10 rounded-lg lg:px-6 form-pendaftaran-box ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <p className="mx-auto text-2xl font-medium text-center text-slate-100">
              Biodata Diri
            </p>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Lengkap</FormLabel>
                  <FormControl>
                    <Input placeholder="Nama lengkap" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nim"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor Induk Mahasiswa</FormLabel>
                  <FormControl>
                    <Input placeholder="Nomor induk mahasiswa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="generation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Angkatan</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih angkatan" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="class"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kelas</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih kelas" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Reguler A">Reguler A</SelectItem>
                      <SelectItem value="Reguler B">Reguler B</SelectItem>
                      <SelectItem value="Reguler C">Reguler C</SelectItem>
                      <SelectItem value="Bilingual A">Bilingual A</SelectItem>
                      <SelectItem value="Bilingual B">Bilingual B</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="generation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Domisili Kampus</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih domisili kampus" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Indralaya">Indralaya</SelectItem>
                      <SelectItem value="Palembang">Palembang</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat Lengkap</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Masukkan alamat lengkap"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="whatsappNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomor Whatsapp</FormLabel>
                  <FormControl>
                    <Input placeholder="Nomor whatsapp" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="idLine"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID Line</FormLabel>
                  <FormControl>
                    <Input placeholder="ID line" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <p className="mt-4 mb-2 text-2xl font-medium lg:mt-8 lg:mb-4 text-slate-100">
              Pemilihan Divisi
            </p>

            <FormField
              control={form.control}
              name="division1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Divisi 1</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih divisi 1" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Administrasi">Administrasi</SelectItem>
                      <SelectItem value="Akademik - PIP">
                        Akademik - Pengembangan Ilmu Pengetahuan
                      </SelectItem>
                      <SelectItem value="Akademik - PTI">
                        Akademik - Pengembangan Teknologi Informasi
                      </SelectItem>
                      <SelectItem value="Kastrad - ADKAM">
                        Kajian Strategi dan Advokasi - Advokasi dan
                        Kesejahteraan Mahasiswa
                      </SelectItem>
                      <SelectItem value="Kastrad - POLPRO">
                        Kajian Strategi dan Advokasi - Politik dan Propaganda
                      </SelectItem>
                      <SelectItem value="KWU">Kewirausahaan</SelectItem>
                      <SelectItem value="KOMINFO - HUMAS">
                        Komunikasi dan Informasi - Hubungan Masyarakat
                      </SelectItem>
                      <SelectItem value="KOMINFO - MULMED">
                        Komunikasi dan Informasi - Multimedia
                      </SelectItem>
                      <SelectItem value="PMB - Olahraga">
                        Pengembangan Minat dan Bakat - Olahraga
                      </SelectItem>
                      <SelectItem value="PMB - Seni">
                        Pengembangan Minat dan Bakat - Seni
                      </SelectItem>
                      <SelectItem value="PSDM">
                        Pengembangan Sumber Daya Manusia
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="division2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Divisi 2</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih divisi 2" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Administrasi">Administrasi</SelectItem>
                      <SelectItem value="Akademik - PIP">
                        Akademik - Pengembangan Ilmu Pengetahuan
                      </SelectItem>
                      <SelectItem value="Akademik - PTI">
                        Akademik - Pengembangan Teknologi Informasi
                      </SelectItem>
                      <SelectItem value="Kastrad - ADKAM">
                        Kajian Strategi dan Advokasi - Advokasi dan
                        Kesejahteraan Mahasiswa
                      </SelectItem>
                      <SelectItem value="Kastrad - POLPRO">
                        Kajian Strategi dan Advokasi - Politik dan Propaganda
                      </SelectItem>
                      <SelectItem value="KWU">Kewirausahaan</SelectItem>
                      <SelectItem value="KOMINFO - HUMAS">
                        Komunikasi dan Informasi - Hubungan Masyarakat
                      </SelectItem>
                      <SelectItem value="KOMINFO - MULMED">
                        Komunikasi dan Informasi - Multimedia
                      </SelectItem>
                      <SelectItem value="PMB - Olahraga">
                        Pengembangan Minat dan Bakat - Olahraga
                      </SelectItem>
                      <SelectItem value="PMB - Seni">
                        Pengembangan Minat dan Bakat - Seni
                      </SelectItem>
                      <SelectItem value="PSDM">
                        Pengembangan Sumber Daya Manusia
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="reasonHMIF"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alasan bergabung HMIF</FormLabel>
                  <FormControl>
                    <Textarea className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="reasonDivision1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alasan memilih Divisi 1</FormLabel>
                  <FormControl>
                    <Textarea className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="reasonDivision2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alasan memilih Divisi 2</FormLabel>
                  <FormControl>
                    <Textarea className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <p className="mt-4 text-2xl font-medium lg:mt-8 text-slate-100">
              Bukti Persyaratan
            </p>
            <div className="">
              {" "}
              <p className="text-lg text-slate-200">
                Link postingan Instagram upload twibbon. Link :{" "}
                <a href="https://www.google.com" className="text-sky-400">
                  Twibbon OPREC HMIF 2024
                </a>
              </p>
              <p className="text-lg text-slate-200">
                Note : Akun IG jangan di private dan jangan lupa tag IG
                @hmif.unsri
              </p>
            </div>
            <FormField
              control={form.control}
              name="kpm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Kartu Pengenal Mahasiswa (KPM/Sementara). Maksimal 4MB,
                    Format : jpg, jpeg, png.
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 cursor-pointer"
                      accept="image/png, image/jpeg, image/jpg"
                      type="file"
                      onChange={(e) =>
                        field.onChange(
                          e.target.files ? e.target.files[0] : null
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isAgree"
              render={({ field }) => (
                <FormItem className="flex items-center gap-3">
                  <FormControl>
                    <Checkbox
                      className="mt-2 border border-white"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>

                  <FormLabel
                    className={`font-normal text-sm lg:text-lg  ${
                      form.formState.errors.isAgree && "text-red-500"
                    }`}
                  >
                    Saya sudah membaca persyaratan dan menerima untuk mengikuti
                    semua rangkaian acara pendaftaran staff HMIF UNSRI.
                  </FormLabel>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
