import React from 'react'
import '../printing/PrintList.scss'
function PrintList() {
  return (
    <div>
      <section class="bg-section">
                <div class="container">
                    <div class="row p-3">
                        <div>
                            <h3> Printers </h3>
                        </div>
                        <div class="col-md-12" style={{ backgroundColor: "#FFFFFF" }}  >
                            <div class="row  "  >
                                <div class="col-sm-2  ">
                                    <div class="d-flex  justify-content-center p-2">
                                        <div>
                                            <label for="" class="me-2  "> Entries </label>
                                        </div>
                                        <div>


                                            <div class="select-dropdown">
                                                <select>
                                                    <option value="Option 1"> 10</option>
                                                    <option value="Option 2"> 20</option>
                                                    <option value="Option 3"> 30</option>
                                                    <option value="Option 4"> 40</option>
                                                    <option value="Option 5"> 50</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-sm-3 ">
                                    <div class="p-2">
                                        <input type="email" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" />
                                    </div>

                                </div>
                                <div class="col-sm-7 ">
                                    <div class="float-end p-2">
                                        <div class="select-dropdown">
                                            <select>
                                                <option value="Option 1"> 
                                                    Export </option>
                                                <option value="Option 2"> Print </option>
                                                <option value="Option 3">  Copy</option>
                                                <option value="Option 4">Excel</option>
                                                <option value="Option 5">CSV</option>
                                                <option value="Option 6">PDF </option>

                                            </select>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-12" style={{ backgroundColor: "#FFFFFF" }} >
                            <div class="table-responsive">
                                <table class="table table-borderless table-striped table-hover table-bordered table-light">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="fw-normal">SN</th>
                                            <th scope="col" class="fw-normal"> TITLE </th>
                                            <th scope="col" class="fw-normal">PRINTER TYPE </th>
                                            <th scope="col" class="fw-normal"> CHARACTERS PER LINE </th>
                                            <th scope="col" class="fw-normal"> PRINTER IP ADDERSS </th>
                                            <th scope="col" class="fw-normal"> PRINTER POST ADDERSS </th>
                                            <th scope="col" class="fw-normal"> SHARE NAME </th>
                                            <th scope="col" class="fw-normal"> ACTIONS </th>
                                        </tr>

                                    </thead>

                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Invoice USB</td>
                                            <td>windows</td>
                                            <td>46</td>
                                            <td></td>
                                            <td></td>
                                            <td>@ Door Soft Printer </td>
                                            <td class="text-center ">
                                                <div class="dropdown">
                                                    <a class="" href="#" id="dropdownMenuLink2" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis-vertical text-black "></i>
                                                    </a>

                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                                                        <li><a class="dropdown-item" href="#"> <i
                                                            class="fa-solid fa-pen-to-square"></i> Edit </a></li>
                                                        <li><a class="dropdown-item" href="#"> <i
                                                            class="fa-solid fa-trash-can"></i> Delete </a></li>
                                                    </ul>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Invoice USB</td>
                                            <td>windows</td>
                                            <td>46</td>
                                            <td> 192.168.1.87</td>
                                            <td> 9100</td>
                                            <td> </td>
                                            <td class="text-center ">
                                                <div class="dropdown">
                                                    <a class="" href="#" id="dropdownMenuLink" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis-vertical text-black "></i>
                                                    </a>

                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        <li><a class="dropdown-item" href="#"> <i
                                                            class="fa-solid fa-pen-to-square"></i> Edit </a></li>
                                                        <li><a class="dropdown-item" href="#"> <i
                                                            class="fa-solid fa-trash-can"></i> Delete </a></li>
                                                    </ul>
                                                </div>
                                            </td>

                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Invoice USB</td>
                                            <td>windows</td>
                                            <td>46</td>
                                            <td> 192.168.1.87</td>
                                            <td> </td>
                                            <td>@ Door Soft Printer </td>

                                            <td class="text-center ">
                                                <div class="dropdown">
                                                    <a class="" href="#" id="dropdownMenuLink" data-bs-toggle="dropdown"
                                                        aria-expanded="false">
                                                        <i class="fa-solid fa-ellipsis-vertical text-black "></i>
                                                    </a>

                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        <li><a class="dropdown-item" href="#"> <i
                                                            class="fa-solid fa-pen-to-square"></i> Edit </a></li>
                                                        <li><a class="dropdown-item" href="#"> <i
                                                            class="fa-solid fa-trash-can"></i> Delete </a></li>
                                                    </ul>
                                                </div>
                                            </td>

                                        </tr>

                                    </tbody>

                                </table>
                                <hr />
                            </div>


                            <div class="d-flex  justify-content-between">
                                <div>
                                    <p>Showing 1 to 2 of 2 entries
                                    </p>
                                </div>
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination text-dark ">
                                        <li class="page-item"><a class="page-link text-dark " href="#">Previous</a></li>
                                        <li class="page-item"><a class="page-link text-dark" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link text-light" href="#"
                                            style={{ backgroundColor: " #90ca4b" }}>2</a></li>
                                        <li class="page-item"><a class="page-link text-dark" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link text-dark" href="#">Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
    </div>
  )
}

export default PrintList
