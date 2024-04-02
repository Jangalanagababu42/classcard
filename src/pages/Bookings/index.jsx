import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";

export default function BookingsPage() {
  return (
    <>
      <Helmet>
        <title>LandingPage</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col w-full pb-[230px] gap-[34px] md:pb-5 bg-gray-100">
        <header className="p-5 bg-white-A700 shadow-xs">
          <div className="flex flex-col items-center justify-center w-full gap-[19px] mx-auto max-w-[1352px]">
            <div className="flex md:flex-col self-stretch justify-between items-center gap-5">
              <Img
                src="images/img_logo.svg"
                alt="logo_one"
                className="h-[32px] md:w-full"
              />
              <div className="flex justify-end items-center w-[53%] md:w-full gap-3">
                <div className="flex justify-between items-center w-[11%] gap-5">
                  <div className="h-[25px] w-[25px] relative">
                    <Img
                      src="images/img_chat.svg"
                      alt="chat_one"
                      className="h-[24px] w-[24px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                    />
                    <div className="h-[11px] w-[11px] right-[0.00px] top-[0.00px] m-auto bg-teal-300 absolute rounded-[5px]" />
                  </div>
                  <div className="flex">
                    <Button
                      size="xs"
                      shape="circle"
                      className="w-[32px] !rounded-[16px]"
                    >
                      <Img src="images/img_shopping_cart.svg" />
                    </Button>
                  </div>
                </div>
                <div className="flex justify-end items-center w-[22%] gap-2">
                  <div className="flex justify-end items-center gap-3 flex-1">
                    <Img
                      src="images/img_avatar.png"
                      alt="avatar_one"
                      className="h-[40px] w-[40px] rounded-[50%]"
                    />
                    <div className="flex">
                      <Text size="s" as="p" className="!text-blue_gray-800">
                        Tom Cook
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_arrow_down.svg"
                    alt="arrowdown_one"
                    className="h-[20px] w-[20px]"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch h-px w-full bg-gray-200" />
            <div className="flex sm:flex-col w-[33%] md:w-full gap-5">
              <a href="#" className="p-[11px] rounded-md">
                <Text size="s" as="p" className="!text-gray-600 !font-normal">
                  Classes
                </Text>
              </a>
              <a href="#" className="p-[11px] rounded-md">
                <Text size="s" as="p" className="!text-gray-600 !font-normal">
                  One-on-one
                </Text>
              </a>
              <Button
                color="gray_100"
                shape="round"
                className="sm:self-stretch w-full flex-1"
              >
                Packages
              </Button>
              <a href="#" className="p-[11px] rounded-md">
                <Text size="s" as="p" className="!text-gray-600 !font-normal">
                  Courses
                </Text>
              </a>
            </div>
          </div>
        </header>
        <div className="flex md:flex-col justify-between items-start w-full gap-5 mx-auto md:p-5 max-w-[1351px]">
          <div className="flex flex-col w-[21%] md:w-full mt-5 gap-5">
            <div className="flex items-center gap-5">
              <Img
                src="images/img_ellipse_4.png"
                alt="circleimage"
                className="h-[48px] w-[48px] rounded-[50%]"
              />
              <div className="flex self-start items-start gap-5">
                <div className="flex flex-col items-start gap-[3px]">
                  <Heading as="h1">Suraj Talreja </Heading>
                  <Text as="p" className="!text-blue_gray-800_01">
                    surajvtalreja@gmail.com
                  </Text>
                </div>
                <Img
                  src="images/img_frame.svg"
                  alt="image"
                  className="h-[24px] w-[24px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                shape="round"
                leftIcon={
                  <Img
                    src="images/img_switch_horizontal.svg"
                    alt="Switch horizontal"
                  />
                }
                className="w-full gap-2 sm:px-5 font-medium border-blue_gray-100 border border-solid"
              >
                Switch organisation
              </Button>
              <Button
                shape="round"
                leftIcon={
                  <Img src="images/img_pencil_alt.svg" alt="Pencil alt" />
                }
                className="w-full gap-2 sm:px-5 font-medium border-blue_gray-100 border border-solid"
              >
                Edit profile
              </Button>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 p-2 rounded-md">
                <Img
                  src="images/img_calendar.svg"
                  alt="calendar_one"
                  className="h-[24px] w-[24px]"
                />
                <Text size="s" as="p" className="self-end !text-blue_gray-700">
                  My calendar
                </Text>
              </div>
              <div className="flex items-center gap-3 p-2 bg-gray-200 rounded-md">
                <Img
                  src="images/img_cursor_click.svg"
                  alt="cursorclick_one"
                  className="h-[24px] w-[24px]"
                />
                <Text size="s" as="p" className="self-end !text-blue_gray-700">
                  My bookings
                </Text>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-md">
                <Img
                  src="images/img_hand.svg"
                  alt="hand_one"
                  className="h-[24px] w-[24px]"
                />
                <Text size="s" as="p" className="self-end !text-blue_gray-700">
                  Attendance history
                </Text>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-md">
                <Img
                  src="images/img_currency_dollar.svg"
                  alt="currencydollar"
                  className="h-[24px] w-[24px]"
                />
                <Text size="s" as="p" className="self-end !text-blue_gray-700">
                  Billing history
                </Text>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-md">
                <Img
                  src="images/img_folder.svg"
                  alt="folder_one"
                  className="h-[24px] w-[24px]"
                />
                <Text size="s" as="p" className="self-end !text-blue_gray-700">
                  My files
                </Text>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-md">
                <Img
                  src="images/img_folder_open.svg"
                  alt="folderopen_one"
                  className="h-[24px] w-[24px]"
                />
                <Text size="s" as="p" className="self-end !text-blue_gray-700">
                  My courses
                </Text>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-md">
                <Img
                  src="images/img_chart_bar.svg"
                  alt="chartbar_one"
                  className="h-[24px] w-[24px]"
                />
                <Text size="s" as="p" className="!text-blue_gray-700">
                  Grades
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-end w-[75%] md:w-full gap-5 py-2">
            <Text size="md" as="p" className="mt-[17px]">
              My bookings
            </Text>
            <div className="self-stretch mb-3 shadow-sm rounded-md">
              <div className="flex md:flex-col justify-center items-start gap-5 p-3 bg-white-A700 rounded-md">
                <Button
                  color="gray_100"
                  size="md"
                  shape="round"
                  className="md:p-5"
                >
                  <Img src="images/img_clipboard.svg" />
                </Button>
                <div className="flex flex-col items-start md:self-stretch gap-3 flex-1">
                  <div className="flex sm:flex-col self-stretch justify-between items-start gap-5">
                    <Text size="s" as="p" className="mt-[3px]">
                      Graphic design (full course)
                    </Text>
                    <div className="flex gap-3">
                      <Button
                        shape="round"
                        leftIcon={
                          <Img src="images/img_download.svg" alt="Download" />
                        }
                        className="gap-2 !text-gray-900 border-blue_gray-100 border border-solid min-w-[138px]"
                      >
                        Invoice PDF
                      </Button>
                      <Button
                        shape="round"
                        leftIcon={
                          <Img src="images/img_download.svg" alt="Download" />
                        }
                        className="gap-2 !text-gray-900 border-blue_gray-100 border border-solid min-w-[142px]"
                      >
                        Receipt PDF
                      </Button>
                    </div>
                  </div>
                  <div className="flex sm:flex-col justify-between w-[65%] md:w-full gap-5">
                    <div className="flex flex-col items-start justify-center gap-[5px]">
                      <Text as="p" className="mt-0.5 !text-gray-600">
                        Subject
                      </Text>
                      <Text as="p">Design for intermediates - L1</Text>
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <Text as="p" className="!text-gray-600">
                        Sessions
                      </Text>
                      <Text as="p">10 sessions</Text>
                    </div>
                    <div className="flex flex-col items-start gap-[5px] py-px">
                      <Text as="p" className="!text-gray-600">
                        Invoice
                      </Text>
                      <Text as="p" className="h-[17px]">
                        13
                      </Text>
                    </div>
                    <div className="flex flex-col items-start gap-[5px]">
                      <Text as="p" className="!text-gray-600">
                        Valid till
                      </Text>
                      <Text as="p">Feb 15, 2024 (23 days left)</Text>
                    </div>
                  </div>
                  <div className="flex self-stretch p-2 bg-gray-100 rounded-md">
                    <div className="flex flex-col w-[24%] md:w-full mb-2 ml-1 gap-1.5 md:ml-0">
                      <div className="flex flex-col items-start gap-[5px]">
                        <Text as="p">
                          <span className="text-gray-900">Balance&nbsp;</span>
                          <span className="text-gray-900 font-semibold">6</span>
                        </Text>
                        <div className="flex self-stretch gap-1">
                          <div className="h-[16px] w-[16px] border-blue_gray-100 border border-solid bg-white-A700 rounded" />
                          <div className="h-[16px] w-[16px] border-blue_gray-100 border border-solid bg-white-A700 rounded" />
                          <div className="h-[16px] w-[16px] border-blue_gray-100 border border-solid bg-white-A700 rounded" />
                          <div className="h-[16px] w-[16px] border-blue_gray-100 border border-solid bg-white-A700 rounded" />
                          <div className="h-[16px] w-[16px] border-blue_gray-100 border border-solid bg-white-A700 rounded" />
                          <div className="h-[16px] w-[16px] border-blue_gray-100 border border-solid bg-white-A700 rounded" />
                          <div className="h-[16px] w-[16px] border-blue_gray-100 border border-solid bg-white-A700 rounded" />
                          <div className="h-[16px] w-[16px] border-blue_gray-100 border border-solid bg-white-A700 rounded" />
                          <div className="h-[16px] w-[16px] border-blue_gray-100 border border-solid bg-white-A700 rounded" />
                          <div className="h-[16px] w-[16px] border-blue_gray-100 border border-solid bg-white-A700 rounded" />
                          <div className="h-[16px] w-[16px] border-blue_gray-100 border border-solid bg-white-A700 rounded" />
                        </div>
                      </div>
                      <div className="flex flex-col items-start w-[39%] md:w-full pt-[5px] gap-[5px]">
                        <Text as="p">
                          <span className="text-gray-900">Scheduled&nbsp;</span>
                          <span className="text-gray-900 font-semibold">3</span>
                        </Text>
                        <Img
                          src="images/img_grid.svg"
                          alt="grid_one"
                          className="h-[16px]"
                        />
                      </div>
                      <div className="flex flex-col items-start pt-[5px] gap-[5px]">
                        <Text as="p" className="!text-teal-800">
                          <span className="text-teal-800">Attended&nbsp;</span>
                          <span className="text-teal-800 font-semibold">5</span>
                        </Text>
                        <div className="flex gap-1">
                          <div className="flex flex-col items-center justify-center p-[3px] border-green-A200 border border-solid bg-teal-50 rounded">
                            <Img
                              src="images/img_checkmark.svg"
                              alt="checkmark_one"
                              className="h-[7px] w-[8px]"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-center p-[3px] border-green-A200 border border-solid bg-teal-50 rounded">
                            <Img
                              src="images/img_checkmark.svg"
                              alt="checkmark_three"
                              className="h-[7px] w-[8px]"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-center p-[3px] border-green-A200 border border-solid bg-teal-50 rounded">
                            <Img
                              src="images/img_checkmark.svg"
                              alt="checkmark_five"
                              className="h-[7px] w-[8px]"
                            />
                          </div>
                          <div className="flex flex-col items-center justify-center p-[3px] border-green-A200 border border-solid bg-teal-50 rounded">
                            <Img
                              src="images/img_checkmark.svg"
                              alt="checkmark_seven"
                              className="h-[7px] w-[8px]"
                            />
                          </div>
                          <div className="flex flex-col items-center p-[5px] border-red-200 border border-solid bg-deep_orange-50 rounded">
                            <Img
                              src="images/img_close.svg"
                              alt="close_one"
                              className="h-[6px] w-[6px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
