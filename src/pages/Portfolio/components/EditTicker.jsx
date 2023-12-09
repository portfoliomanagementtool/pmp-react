import React,{useState , useEffect} from "react";

const EditTicker = ({defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      category: "",
      ticker: "",
      price: 0,
      qty: 0,
    }
  );

  useEffect(() => {
    // Update formState when defaultValue changes
    if (defaultValue) {
      setFormState(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div>
      <div class="page-container relative h-full flex flex-auto flex-col px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:px-8">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3>Edit Asset</h3>
          </div>
        </div>
        <form action="#">
          <div class="form-container vertical">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div class="lg:col-span-2">
                <div
                  class="card mb-4 border-0 border-b pb-6 py-4 md:border-gray-200 md:dark:border-gray-600 rounded-br-none rounded-bl-none card-border"
                  role="presentation"
                >
                  <div class="card-body card-gutterless">
                    <h5>Basic Information</h5>
                    <p class="mb-6">
                      Section to config basic product information
                    </p>
                    <div class="form-item vertical">
                      <label class="form-label mb-2">Category</label>
                      <div class="">
                        <input
                          class="input input-md h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600"
                          type="text"
                          name="name"
                          autocomplete="off"
                          placeholder="Category"
                          value={formState.category}
                          onChange={(e) =>
                            setFormState({ ...formState, category: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div class="form-item vertical">
                      <label class="form-label mb-2">Code</label>
                      <div class="">
                        <input
                          class="input input-md h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600"
                          type="text"
                          name="productCode"
                          autocomplete="off"
                          placeholder="Code"
                          value="BIS-012"
                        />
                      </div>
                    </div>
                    {/* <div class="form-item vertical">
                      <label class="form-label mb-2 !justify-start">
                        Description
                      </label>
                      <div class="">
                        <div class="rich-text-editor">
                          <div class="quill ">
                            <div class="ql-toolbar ql-snow">
                              <span class="ql-formats">
                                <span class="ql-header ql-picker">
                                  <span
                                    class="ql-picker-label"
                                    tabindex="0"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="ql-picker-options-2"
                                  >
                                    <svg viewBox="0 0 18 18">
                                      {" "}
                                      <polygon
                                        class="ql-stroke"
                                        points="7 11 9 13 11 11 7 11"
                                      ></polygon>{" "}
                                      <polygon
                                        class="ql-stroke"
                                        points="7 7 9 5 11 7 7 7"
                                      ></polygon>{" "}
                                    </svg>
                                  </span>
                                  <span
                                    class="ql-picker-options"
                                    aria-hidden="true"
                                    tabindex="-1"
                                    id="ql-picker-options-2"
                                  >
                                    <span
                                      tabindex="0"
                                      role="button"
                                      class="ql-picker-item"
                                      data-value="1"
                                    ></span>
                                    <span
                                      tabindex="0"
                                      role="button"
                                      class="ql-picker-item"
                                      data-value="2"
                                    ></span>
                                    <span
                                      tabindex="0"
                                      role="button"
                                      class="ql-picker-item"
                                      data-value="3"
                                    ></span>
                                    <span
                                      tabindex="0"
                                      role="button"
                                      class="ql-picker-item"
                                    ></span>
                                  </span>
                                </span>
                                <select
                                  class="ql-header hidden"
                                >
                                  <option value="1"></option>
                                  <option value="2"></option>
                                  <option value="3"></option>
                                  <option selected="selected"></option>
                                </select>
                              </span>
                              <span class="ql-formats">
                                <button type="button" class="ql-bold">
                                  <svg viewBox="0 0 18 18">
                                    {" "}
                                    <path
                                      class="ql-stroke"
                                      d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"
                                    ></path>{" "}
                                    <path
                                      class="ql-stroke"
                                      d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"
                                    ></path>{" "}
                                  </svg>
                                </button>
                                <button type="button" class="ql-italic">
                                  <svg viewBox="0 0 18 18">
                                    {" "}
                                    <line
                                      class="ql-stroke"
                                      x1="7"
                                      x2="13"
                                      y1="4"
                                      y2="4"
                                    ></line>{" "}
                                    <line
                                      class="ql-stroke"
                                      x1="5"
                                      x2="11"
                                      y1="14"
                                      y2="14"
                                    ></line>{" "}
                                    <line
                                      class="ql-stroke"
                                      x1="8"
                                      x2="10"
                                      y1="14"
                                      y2="4"
                                    ></line>{" "}
                                  </svg>
                                </button>
                                <button type="button" class="ql-underline">
                                  <svg viewBox="0 0 18 18">
                                    {" "}
                                    <path
                                      class="ql-stroke"
                                      d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"
                                    ></path>{" "}
                                    <rect
                                      class="ql-fill"
                                      height="1"
                                      rx="0.5"
                                      ry="0.5"
                                      width="12"
                                      x="3"
                                      y="15"
                                    ></rect>{" "}
                                  </svg>
                                </button>
                                <button type="button" class="ql-link">
                                  <svg viewBox="0 0 18 18">
                                    {" "}
                                    <line
                                      class="ql-stroke"
                                      x1="7"
                                      x2="11"
                                      y1="7"
                                      y2="11"
                                    ></line>{" "}
                                    <path
                                      class="ql-even ql-stroke"
                                      d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"
                                    ></path>{" "}
                                    <path
                                      class="ql-even ql-stroke"
                                      d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"
                                    ></path>{" "}
                                  </svg>
                                </button>
                              </span>
                              <span class="ql-formats">
                                <button
                                  type="button"
                                  class="ql-list"
                                  value="ordered"
                                >
                                  <svg viewBox="0 0 18 18">
                                    {" "}
                                    <line
                                      class="ql-stroke"
                                      x1="7"
                                      x2="15"
                                      y1="4"
                                      y2="4"
                                    ></line>{" "}
                                    <line
                                      class="ql-stroke"
                                      x1="7"
                                      x2="15"
                                      y1="9"
                                      y2="9"
                                    ></line>{" "}
                                    <line
                                      class="ql-stroke"
                                      x1="7"
                                      x2="15"
                                      y1="14"
                                      y2="14"
                                    ></line>{" "}
                                    <line
                                      class="ql-stroke ql-thin"
                                      x1="2.5"
                                      x2="4.5"
                                      y1="5.5"
                                      y2="5.5"
                                    ></line>{" "}
                                    <path
                                      class="ql-fill"
                                      d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"
                                    ></path>{" "}
                                    <path
                                      class="ql-stroke ql-thin"
                                      d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"
                                    ></path>{" "}
                                    <path
                                      class="ql-stroke ql-thin"
                                      d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"
                                    ></path>{" "}
                                  </svg>
                                </button>
                                <button
                                  type="button"
                                  class="ql-list"
                                  value="bullet"
                                >
                                  <svg viewBox="0 0 18 18">
                                    {" "}
                                    <line
                                      class="ql-stroke"
                                      x1="6"
                                      x2="15"
                                      y1="4"
                                      y2="4"
                                    ></line>{" "}
                                    <line
                                      class="ql-stroke"
                                      x1="6"
                                      x2="15"
                                      y1="9"
                                      y2="9"
                                    ></line>{" "}
                                    <line
                                      class="ql-stroke"
                                      x1="6"
                                      x2="15"
                                      y1="14"
                                      y2="14"
                                    ></line>{" "}
                                    <line
                                      class="ql-stroke"
                                      x1="3"
                                      x2="3"
                                      y1="4"
                                      y2="4"
                                    ></line>{" "}
                                    <line
                                      class="ql-stroke"
                                      x1="3"
                                      x2="3"
                                      y1="9"
                                      y2="9"
                                    ></line>{" "}
                                    <line
                                      class="ql-stroke"
                                      x1="3"
                                      x2="3"
                                      y1="14"
                                      y2="14"
                                    ></line>{" "}
                                  </svg>
                                </button>
                              </span>
                              <span class="ql-formats">
                                <button type="button" class="ql-clean">
                                  <svg class="" viewBox="0 0 18 18">
                                    {" "}
                                    <line
                                      class="ql-stroke"
                                      x1="5"
                                      x2="13"
                                      y1="3"
                                      y2="3"
                                    ></line>{" "}
                                    <line
                                      class="ql-stroke"
                                      x1="6"
                                      x2="9.35"
                                      y1="12"
                                      y2="3"
                                    ></line>{" "}
                                    <line
                                      class="ql-stroke"
                                      x1="11"
                                      x2="15"
                                      y1="11"
                                      y2="15"
                                    ></line>{" "}
                                    <line
                                      class="ql-stroke"
                                      x1="15"
                                      x2="11"
                                      y1="11"
                                      y2="15"
                                    ></line>{" "}
                                    <rect
                                      class="ql-fill"
                                      height="1"
                                      rx="0.5"
                                      ry="0.5"
                                      width="7"
                                      x="2"
                                      y="14"
                                    ></rect>{" "}
                                  </svg>
                                </button>
                              </span>
                            </div>
                            <div class="ql-container ql-snow">
                              <div
                                class="ql-editor"
                                data-gramm="false"
                                contenteditable="true"
                              >
                                <p>
                                  Make a brew a right royal knees up and we all
                                  like figgy pudding a comely wench gutted its
                                  nicked pulled out the eating irons, ask your
                                  mother if on goggle box toad in the whole
                                  Sherlock rather, ar kid pennyboy naff superb
                                  pezzy little.
                                </p>
                                <p>
                                  <br />
                                </p>
                                <ul>
                                  <li>
                                    Scally utter shambles blighty squirrel
                                    numbskull rumpy pumpy apple and pears bow
                                    ties are cool
                                  </li>
                                  <li>
                                    pompous nosh have a butcher at this
                                    flabbergasted a right toff black cab jolly
                                    good made a pigs ear of it
                                  </li>
                                  <li>
                                    Roast beef conked him one on the nose had a
                                    barney with the inlaws beefeater is she avin
                                    a laugh supper, gobsmacked argy-bargy
                                    challenge you to a duel
                                  </li>
                                  <li>
                                    whizz air one dirty linen chav not some sort
                                    of dosshouse.
                                  </li>
                                </ul>
                              </div>
                              <div
                                class="ql-clipboard"
                                contenteditable="true"
                                tabindex="-1"
                              ></div>
                              <div class="ql-tooltip ql-hidden">
                                <a
                                  class="ql-preview"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  href="about:blank"
                                ></a>
                                <input
                                  type="text"
                                  data-formula="e=mc^2"
                                  data-link="https://quilljs.com"
                                  data-video="Embed URL"
                                />
                                <a class="ql-action"></a>
                                <a class="ql-remove"></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div
                  class="card mb-4 border-0 border-b pb-6 py-4 md:border-gray-200 md:dark:border-gray-600 rounded-br-none rounded-bl-none card-border"
                  role="presentation"
                >
                  <div class="card-body card-gutterless">
                    <h5>Pricing</h5>
                    <p class="mb-6">
                      Section to config product sales information
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="col-span-1">
                        <div class="form-item vertical">
                          <label class="form-label mb-2">SKU</label>
                          <div class="">
                            <input
                              class="input input-md h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600"
                              type="text"
                              name="stock"
                              autocomplete="off"
                              placeholder="Stock"
                              value={formState.price}
                              inputmode="numeric"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-span-1">
                        <div class="form-item vertical">
                          <label class="form-label mb-2">Price</label>
                          <div class="">
                            <span class="input-wrapper undefined">
                              <div class="input-suffix-start"> $</div>
                              <input
                                class="input input-md h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600 pl-[1.5625rem]"
                                type="text"
                                name="price"
                                autocomplete="off"
                                placeholder="Price"
                                value={formState.price}
                                inputmode="numeric"
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
                {/* <div
                  class="card mb-4 border-0  py-4 md:border-gray-200 md:dark:border-gray-600 rounded-br-none rounded-bl-none card-border"
                  role="presentation"
                >
                  <div class="card-body card-gutterless">
                    <h5>Organizations</h5>
                    <p class="mb-6">Section to config the product attribute</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="col-span-1">
                        <div class="form-item vertical">
                          <label class="form-label mb-2">Category</label>
                          <div class="">
                            <div class="select select-md css-b62m3t-container">
                              <span
                                id="react-select-7-live-region"
                                class="css-7pg0cj-a11yText"
                              ></span>
                              <span
                                aria-live="polite"
                                aria-atomic="false"
                                aria-relevant="additions text"
                                class="css-7pg0cj-a11yText"
                              ></span>
                              <div class="select__control css-15bhs5i-control">
                                <div class="select__value-container select__value-container--has-value css-hlgwow">
                                  <div class="select__single-value css-yr46hd-singleValue">
                                    Devices
                                  </div>
                                  <div
                                    class="select__input-container css-136ehom"
                                    data-value=""
                                  >
                                    <input
                                      class="select__input w-full grid-area-1/2 min-w-2 border-0 m-0 outline-none p-0"
                                      autocapitalize="none"
                                      autocomplete="off"
                                      autocorrect="off"
                                      id="react-select-7-input"
                                      spellcheck="false"
                                      tabindex="0"
                                      type="text"
                                      aria-autocomplete="list"
                                      aria-expanded="false"
                                      aria-haspopup="true"
                                      role="combobox"
                                      value=""
                                      // style="color: inherit; background: 0px center; opacity: 1;
                                    />
                                  </div>
                                </div>
                                <div class="select__indicators css-1wy0on6">
                                  <div class="select-dropdown-indicator">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 20 20"
                                      aria-hidden="true"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <input
                                name="category"
                                type="hidden"
                                value="devices"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-span-1">
                        <div class="form-item vertical">
                          <label class="form-label mb-2">Tags</label>
                          <div class="">
                            <div class="select select-md css-b62m3t-container">
                              <span
                                id="react-select-8-live-region"
                                class="css-7pg0cj-a11yText"
                              ></span>
                              <span
                                aria-live="polite"
                                aria-atomic="false"
                                aria-relevant="additions text"
                                class="css-7pg0cj-a11yText"
                              ></span>
                              <div class="select__control css-15bhs5i-control">
                                <div class="select__value-container select__value-container--is-multi select__value-container--has-value css-1dyz3mf">
                                  <div class="select__multi-value css-1s8lrej-multiValue">
                                    <div class="select__multi-value__label css-ntdiql">
                                      trend
                                    </div>
                                    <div
                                      role="button"
                                      class="select__multi-value__remove css-v7duua"
                                      aria-label="Remove trend"
                                    >
                                      <svg
                                        height="14"
                                        width="14"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                        focusable="false"
                                        class="css-8mmkcg"
                                      >
                                        <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div class="select__multi-value css-1s8lrej-multiValue">
                                    <div class="select__multi-value__label css-ntdiql">
                                      unisex
                                    </div>
                                    <div
                                      role="button"
                                      class="select__multi-value__remove css-v7duua"
                                      aria-label="Remove unisex"
                                    >
                                      <svg
                                        height="14"
                                        width="14"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                        focusable="false"
                                        class="css-8mmkcg"
                                      >
                                        <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div
                                    class="select__input-container css-136ehom"
                                    data-value=""
                                  >
                                    <input
                                      class="select__input w-full grid-area-1/2 min-w-2 border-0 m-0 outline-none p-0"
                                      autocapitalize="none"
                                      autocomplete="off"
                                      autocorrect="off"
                                      id="react-select-8-input"
                                      spellcheck="false"
                                      tabindex="0"
                                      type="text"
                                      aria-autocomplete="list"
                                      aria-expanded="false"
                                      aria-haspopup="true"
                                      role="combobox"
                                      value=""
                                      // style="color: inherit; background: 0px center; opacity: 1; 
                                    />
                                  </div>
                                </div>
                                <div class="select__indicators css-1wy0on6">
                                  <div aria-hidden="true">
                                    <div class="select-clear-indicator">
                                      <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clip-rule="evenodd"
                                        ></path>
                                      </svg>
                                    </div>
                                  </div>
                                  <div class="select-dropdown-indicator">
                                    <svg
                                      stroke="currentColor"
                                      fill="currentColor"
                                      stroke-width="0"
                                      viewBox="0 0 20 20"
                                      aria-hidden="true"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <input
                                  name="tags"
                                  type="hidden"
                                  value="trend"
                                />
                                <input
                                  name="tags"
                                  type="hidden"
                                  value="unisex"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="col-span-1">
                        <div class="form-item vertical">
                          <label class="form-label mb-2">Brand</label>
                          <div class="">
                            <input
                              class="input input-md h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600"
                              type="text"
                              name="brand"
                              autocomplete="off"
                              placeholder="Brand"
                              value="Luminaire"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-span-1">
                        <div class="form-item vertical">
                          <label class="form-label mb-2">Vendor</label>
                          <div class="">
                            <input
                              class="input input-md h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600"
                              type="text"
                              name="vendor"
                              autocomplete="off"
                              placeholder="Vendor"
                              value="WindForce co, Ltd"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* <div class="lg:col-span-1">
                <div class="card mb-4 border-0 card-border" role="presentation">
                  <div class="card-body card-gutterless">
                    <h5>Product Image</h5>
                    <p class="mb-6">Add or change image for the product</p>
                    <div class="form-item vertical">
                      <label class="form-label"></label>
                      <div class="">
                        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                          <div class="group relative rounded border p-2 flex">
                            <img
                              class="rounded max-h-[140px] max-w-full"
                              src="/img/products/product-1.jpg"
                              alt="image-1"
                            />
                            <div class="absolute inset-2 bg-gray-900/[.7] group-hover:flex hidden text-xl items-center justify-center">
                              <span class="text-gray-100 hover:text-gray-300 cursor-pointer p-1.5">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                  <path
                                    fill-rule="evenodd"
                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                              <span class="text-gray-100 hover:text-gray-300 cursor-pointer p-1.5">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div class="group relative rounded border p-2 flex">
                            <img
                              class="rounded max-h-[140px] max-w-full"
                              src="/img/products/product-1-2.jpg"
                              alt="image-2"
                            />
                            <div class="absolute inset-2 bg-gray-900/[.7] group-hover:flex hidden text-xl items-center justify-center">
                              <span class="text-gray-100 hover:text-gray-300 cursor-pointer p-1.5">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                  <path
                                    fill-rule="evenodd"
                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                              <span class="text-gray-100 hover:text-gray-300 cursor-pointer p-1.5">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div class="group relative rounded border p-2 flex">
                            <img
                              class="rounded max-h-[140px] max-w-full"
                              src="/img/products/product-1-3.jpg"
                              alt="image-3"
                            />
                            <div class="absolute inset-2 bg-gray-900/[.7] group-hover:flex hidden text-xl items-center justify-center">
                              <span class="text-gray-100 hover:text-gray-300 cursor-pointer p-1.5">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                  <path
                                    fill-rule="evenodd"
                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                              <span class="text-gray-100 hover:text-gray-300 cursor-pointer p-1.5">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div class="group relative rounded border p-2 flex">
                            <img
                              class="rounded max-h-[140px] max-w-full"
                              src="/img/products/product-1-4.jpg"
                              alt="image-4"
                            />
                            <div class="absolute inset-2 bg-gray-900/[.7] group-hover:flex hidden text-xl items-center justify-center">
                              <span class="text-gray-100 hover:text-gray-300 cursor-pointer p-1.5">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                  <path
                                    fill-rule="evenodd"
                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                              <span class="text-gray-100 hover:text-gray-300 cursor-pointer p-1.5">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div class="upload upload-draggable hover:border-indigo-600 min-h-fit">
                            <input
                              class="upload-input draggable"
                              type="file"
                              title=""
                              value=""
                            />
                            <div class="max-w-full flex flex-col px-4 py-2 justify-center items-center">
                              <img src="/img/others/upload.png" alt="" />
                              <p class="font-semibold text-center text-gray-800 dark:text-white">
                                Upload
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div class="sticky -bottom-1 -mx-8 px-8 flex items-center justify-between py-4 border-t bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div>
                <button
                  class="button bg-transparent border border-transparent hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm text-red-600"
                  type="button"
                >
                  <span class="flex items-center justify-center">
                    <span class="text-lg">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </span>
                    <span class="ltr:ml-1 rtl:mr-1">Delete</span>
                  </span>
                </button>
              </div>
              <div class="md:flex items-center">
                <button
                  class="button bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500 text-gray-600 dark:text-gray-100 radius-round h-9 px-3 py-2 text-sm ltr:mr-3 rtl:ml-3"
                  type="button"
                >
                  Discard
                </button>
                <button
                  class="button bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white radius-round h-9 px-3 py-2 text-sm"
                  type="submit"
                >
                  <span class="flex items-center justify-center">
                    <span class="text-lg">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"></path>
                      </svg>
                    </span>
                    <span class="ltr:ml-1 rtl:mr-1">Save</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTicker;
