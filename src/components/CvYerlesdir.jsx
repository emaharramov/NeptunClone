import React from 'react';
import { CiImageOn } from "react-icons/ci";

function CvYerlesdir() {
  return (
    <>
       <div>
            <form method="post" className="form">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[10px] md:gap-y-[0px] gap-x-[40px] my-[20px]">
                <div className="flex flex-col">
                  <label htmlFor="name">Adınız*</label>
                  <input type="text" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name">Soyadınız*</label>
                  <input type="text" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name">Atanızın adı*</label>
                  <input type="text" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[10px] md:gap-y-[0px] gap-x-[40px] my-[20px]">
                <div className="flex flex-col">
                  <label htmlFor="name">Cins*</label>
                  <select>
                    <option value="">---</option>
                    <option value="kishi">Kişi</option>
                    <option value="qadin">Qadın</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name">Yaş*</label>
                  <input type="text" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="chooseFile" className="mt-[30px] chooseFileLabel">
                    <CiImageOn /> Şəkil yüklə
                  </label>
                  <input type="file" id="chooseFile" className="chooseFile hidden" />
                </div>
              </div>
              <div className="grid grid-col-1 my-[20px]">
                <label htmlFor="tehsil">Təhsil</label>
                <select id="tehsil">
                  <option value="">---</option>
                  <option value="Ali">Ali</option>
                  <option value="Оrta">Оrta iхtisas təhsili</option>
                  <option value="Tam">Tam оrta təhsil</option>
                </select>
              </div>
              <div className="grid grid-col-1 my-[20px]">
                <label htmlFor="tehsil">Ətraflı</label>
                <textarea id="textarea" name="textarea" className="h-[160px]"></textarea>
              </div>
              <div className="flex flex-col">
                <label htmlFor="name">İş təcrübəsi</label>
                <input type="text" />
              </div>
              <div className="grid grid-col-1 my-[20px]">
                <label htmlFor="tehsil">Ətraflı</label>
                <textarea id="textarea" name="textarea" className="h-[160px]"></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[10px] md:gap-y-[0px] gap-x-[40px] my-[20px]">
                <div className="flex flex-col">
                  <label htmlFor="kateqoriya">Kateqoriya</label>
                  <select id="kateqoriya" name="kateqoriya" className="form-control">
                    <option value="">---</option>
                    <option value="A1">A1</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="BE">BE</option>
                    <option value="CE">CE</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name">Vəzifə</label>
                  <input type="text" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[10px] md:gap-y-[0px] gap-x-[40px] my-[20px]">
                <div className="flex flex-col">
                  <label htmlFor="sheher">Şəhər</label>
                  <select id="sheher">
                    <option value="">---</option>
                    <option value="Bakı">Bakı</option>
                    <option value="Gəncə">Gəncə</option>
                    <option value="Sumqayıt">Sumqayıt</option>
                    <option value="Qobustan">Qobustan</option>
                    <option value="Xaçmaz">Xaçmaz</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="emekhaqqi">Minimum əmək haqqı (AZN)</label>
                  <select id="emekhaqqi">
                    <option value="">---</option>
                    <option value="300">300</option>
                    <option value="400">400</option>
                    <option value="500">500</option>
                    <option value="600">600</option>
                    <option value="700">700</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-col-1 my-[20px]">
                <label htmlFor="tehsil">Bacarıqlar</label>
                <textarea id="textarea" name="textarea" className="h-[160px]"></textarea>
              </div>
              <div className="grid grid-col-1 my-[20px]">
                <label htmlFor="tehsil">Əlavə məlumatlar</label>
                <textarea id="textarea" name="textarea" className="h-[160px]"></textarea>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-[10px] md:gap-y-[0px] gap-x-[40px] my-[20px]">
                <div className="flex flex-col">
                  <label htmlFor="name">Email</label>
                  <input type="text" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name">Telefon</label>
                  <input type="text" />
                </div>
              </div>
              <button id="submit" className='w-full md:block md:w-[27%]' type="submit">Yerləşdir</button>
            </form>
          </div>
    </>
  )
}

export default CvYerlesdir
