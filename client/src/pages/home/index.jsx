import React from "react";
import "./index.scss";
import user1 from "../../assets/images/users/avatar-1.jpg";
import user2 from "../../assets/images/users/avatar-8.jpg";
import user3 from "../../assets/images/users/avatar-4.jpg";
import user4 from "../../assets/images/users/avatar-2.jpg";
import user5 from "../../assets/images/users/avatar-9.jpg";
import { Tooltip, Steps } from "antd";
import ApexCharts from "../../components/pie-chart";

const description = "This is a description.";

const Home = () => {
  return (
    <main id="home">
      <section className="panel">
        <div className="container">
          <h2>Nəzarət Paneli</h2>
          <div className="row">
            <div className="card">
              <i className="fa-solid fa-heart-pulse fa-2xl"></i>

              <p>Aktiv tasklar</p>
            </div>
            <div className="card">
              <i className="fa-solid fa-comment-medical fa-2xl"></i>

              <p>Yeni task yarat</p>
            </div>
            <div className="card">
              <i className="fa-solid fa-circle-plus fa-2xl"></i>

              <p>Yeni layihə yarat</p>
            </div>
            <div className="card">
              <i className="fa-solid fa-location-dot fa-2xl"></i>

              <p>Layihələr</p>
            </div>
            <div className="card">
              <i className="fa-solid fa-users fa-2xl"></i>

              <p>İstifadəçilər</p>
            </div>
            <div className="card">
              <i className="fa-solid fa-box-archive fa-2xl"></i>

              <p>Arxiv</p>
            </div>
          </div>
        </div>
      </section>
      <section className="tasks">
        <div className="container">
          <div>
            <h2>Son tasklar</h2>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ width: "4%" }} scope="col" className="border">
                      #
                    </th>
                    <th style={{ width: "23%" }} scope="col" className="border">
                      Taskın adı
                    </th>
                    <th style={{ width: "8%" }} scope="col" className="border">
                      Üzvlər
                    </th>
                    <th scope="col" className="border">
                      Layihə
                    </th>
                    <th scope="col" className="border">
                      <i className="uil uil-schedule font-16 me-1"></i> Başlama
                    </th>
                    <th scope="col" className="border">
                      <i className="uil uil-schedule font-16 me-1"></i>Bitmə
                    </th>
                    <th scope="col" className="border">
                      <i className="uil uil-align-alt font-16 me-1"></i>Sub
                      tasklar
                    </th>
                    <th scope="col" className="border">
                      <i className="uil uil-comment-message font-16 me-1"></i>
                      Şərhlər
                    </th>
                    <th scope="col" className="border">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="border">
                      1
                    </th>
                    <td className="border">
                      <a className="task_url" href="?page=taskdetails">
                        İş yerlərinin attestasiyası keçirilməyib
                      </a>
                    </td>
                    <td className="border">
                      <Tooltip
                        overlayInnerStyle={{ color: "black" }}
                        color="white"
                        title="Assigned to Arya S"
                      >
                        <img
                          src={user1}
                          alt="image"
                          className="avatar-xs rounded-circle me-1"
                          data-bs-container="#tooltip-container"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                        />
                      </Tooltip>
                    </td>
                    <td className="border">Port Baku Residence</td>
                    <td className="border">15.01.2022</td>
                    <td className="border">22.02.2022</td>
                    <td className="border">3/7</td>
                    <td className="border">21</td>
                    <td className="border">
                      <span className="badge bg-danger rounded-pill p-1">
                        Gecikir
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="border">
                      2
                    </th>
                    <td className="border">
                      <a className="task_url" href="?page=taskdetails">
                        İşçilərin Fərdi Mühafizə Vasitələrindən düzgün istifadə
                        edilmədiyi müşahidə olundu
                      </a>
                    </td>
                    <td className="border">
                      <Tooltip
                        overlayInnerStyle={{ color: "black" }}
                        color="white"
                        title="Assigned to Arya S"
                      >
                        <img
                          src={user2}
                          alt="image"
                          className="avatar-xs rounded-circle me-1"
                          data-bs-container="#tooltip-container"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                        />
                      </Tooltip>
                    </td>
                    <td className="border">Absheron Apartments</td>
                    <td className="border">17.01.2022</td>
                    <td className="border">19.02.2022</td>
                    <td className="border">9/9</td>
                    <td className="border">88</td>
                    <td className="border">
                      <span className="badge bg-success rounded-pill p-1">
                        Tamamlandı
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th className="border" scope="row">
                      3
                    </th>
                    <td className="border">
                      <a className="task_url" href="?page=taskdetails">
                        Lift otağının giriş hissəsində quraşdırılmış nərdivanın
                        qəfəs hissəsindəki dəmir hissələrdən bir neçəsi
                      </a>
                    </td>
                    <td className="border">
                      <Tooltip
                        overlayInnerStyle={{ color: "black" }}
                        color="white"
                        title="Assigned to Arya S"
                      >
                        <img
                          src={user3}
                          alt="image"
                          className="avatar-xs rounded-circle me-1"
                          data-bs-container="#tooltip-container"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                        />
                      </Tooltip>
                    </td>
                    <td className="border">Port Baku Tower 1</td>
                    <td className="border">04.01.2022</td>
                    <td className="border">08.02.2022</td>
                    <td className="border">2/5</td>
                    <td className="border">14</td>
                    <td className="border">
                      <span className="badge bg-primary rounded-pill p-1">
                        Davam edən
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th className="border" scope="row">
                      4
                    </th>
                    <td className="border">
                      <a className="task_url" href="?page=taskdetails">
                        Rahat Bina App Port baku recidence de sakinlere tehvil
                        verilmesi
                      </a>
                    </td>
                    <td className="border">
                      <Tooltip
                        overlayInnerStyle={{ color: "black" }}
                        color="white"
                        title="Assigned to Arya S"
                      >
                        <img
                          src={user4}
                          alt="image"
                          className="avatar-xs rounded-circle me-1"
                          data-bs-container="#tooltip-container"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                        />
                      </Tooltip>
                    </td>
                    <td className="border">Port Baku Tower 2</td>
                    <td className="border">07.01.2022</td>
                    <td className="border">11.03.2022</td>
                    <td className="border">9/14</td>
                    <td className="border">33</td>
                    <td className="border">
                      <span className="badge bg-danger rounded-pill p-1">
                        Gecikir
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <th className="border" scope="row">
                      5
                    </th>
                    <td className="border">
                      <a className="task_url" href="?page=taskdetails">
                        Yanğın Təhlükəsizliyi üzrə cavabdeh şəxs təyin
                        edilməmişdir
                      </a>
                    </td>
                    <td className="border">
                      <Tooltip
                        overlayInnerStyle={{ color: "black" }}
                        color="white"
                        title="Assigned to Arya S"
                      >
                        <img
                          src={user5}
                          alt="image"
                          className="avatar-xs rounded-circle me-1"
                          data-bs-container="#tooltip-container"
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                        />
                      </Tooltip>
                    </td>
                    <td className="border">Bilgah Estate</td>
                    <td className="border">01.02.2022</td>
                    <td className="border">10.03.2022</td>
                    <td className="border">6/11</td>
                    <td className="border">65</td>
                    <td className="border">
                      <span className="badge bg-danger rounded-pill p-1">
                        Gecikir
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="last-actions">
        <div className="container">
          <div className="holder">
            <h3>SON FƏALİYYƏTLƏR</h3>
            <Steps
              direction="vertical"
              size="small"
              current={1}
              items={[
                {
                  title: "Finished",
                  description,
                },
                {
                  title: "In Progress",
                  description,
                },
                {
                  title: "Waiting",
                  description,
                },
              ]}
            />
          </div>
        </div>
      </section>
      <section className="pie-charts">
        <div className="container">
          <ApexCharts />
        </div>
      </section>
    </main>
  );
};

export default Home;
