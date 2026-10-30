const a={id:"hr-payroll",group:"domain",title:"HR & Payroll",emoji:"👥",tagline:`People, time and pay: data that must be right every month.
VI: Con người, thời gian và tiền lương: dữ liệu phải đúng mỗi tháng.`,lessons:[{id:"hr-payroll.records",title:"Employee records and history · Hồ sơ nhân viên và lịch sử",summary:`Keep the history of contracts, jobs and salary, not only today’s value.
VI: Lưu lịch sử hợp đồng, chức danh và lương, không chỉ giá trị hiện tại.`,minutes:5,level:"basic",blocks:[{type:"text",text:`In this lesson you learn how to keep staff data that changes over time.
VI: Trong bài này, bạn học cách lưu dữ liệu nhân sự thay đổi theo thời gian.`},{type:"text",text:`The **employee master** is one row per person: code, name, birth date, ID number and bank account.
VI: **Hồ sơ nhân viên** là một dòng cho mỗi người: mã, họ tên, ngày sinh, số CCCD và tài khoản ngân hàng.
Around it are records that change over time: **contracts**, **department**, **position** and **salary**.
VI: Xung quanh là các dữ liệu thay đổi theo thời gian: **hợp đồng lao động**, **phòng ban**, **chức danh** và **lương**.
A **payslip** (phiếu lương) is the pay slip for one person and one month.
VI: **Phiếu lương** là tờ lương của một người trong một tháng.`},{type:"visual",svg:`<svg viewBox="0 0 360 180">
<rect class="v-bad" x="8" y="12" width="164" height="156" rx="8"/><text class="v-title" x="90" y="36" text-anchor="middle">Overwrite</text><text class="v-small" x="90" y="64" text-anchor="middle">Salary now: 18,000,000</text><text class="v-muted v-small" x="90" y="84" text-anchor="middle">15,000,000 is lost</text><text class="v-small" x="90" y="120" text-anchor="middle">March payslip reprint:</text><text class="v-bad-text v-title" x="90" y="146" text-anchor="middle">18,000,000 wrong</text>
<rect class="v-good" x="188" y="12" width="164" height="156" rx="8"/><text class="v-title" x="270" y="36" text-anchor="middle">Add dated rows</text><text class="v-small" x="270" y="64" text-anchor="middle">Jan to Mar: 15,000,000</text><text class="v-small" x="270" y="84" text-anchor="middle">From 1 Apr: 18,000,000</text><text class="v-small" x="270" y="120" text-anchor="middle">March payslip reprint:</text><text class="v-good-text v-title" x="270" y="146" text-anchor="middle">15,000,000 right</text>
</svg>`,alt:"Two boxes side by side. The left box overwrites the salary, so the March payslip shows the wrong 18,000,000 VND. The right box keeps dated rows, so the reprint shows the right 15,000,000 VND.",caption:`Overwriting loses the past. Dated rows keep it.
VI: Ghi đè làm mất quá khứ. Dòng có ngày hiệu lực giữ lại quá khứ.`},{type:"text",text:`Do not overwrite these values. Add a new row with a **ValidFrom** and a **ValidTo** date.
VI: Đừng ghi đè các giá trị này. Hãy thêm dòng mới có ngày **ValidFrom** và **ValidTo**.
**ValidFrom** is the first day a row applies. **ValidTo** is its last day. An empty ValidTo means still open.
VI: **ValidFrom** là ngày đầu tiên dòng có hiệu lực. **ValidTo** là ngày cuối cùng. ValidTo trống nghĩa là vẫn đang mở.
This design is called an **effective-dated** record.
VI: Cách thiết kế này gọi là dữ liệu **theo ngày hiệu lực**.`},{type:"text",text:`Story: Hoa Mai Bakery has 12 staff. Lan is a baker. She earns 15,000,000 VND a month. On 1 April she gets a raise to 18,000,000 VND.
VI: Câu chuyện: tiệm bánh Hoa Mai có 12 nhân viên. Lan là thợ bánh, lương 15.000.000đ một tháng. Ngày 1/4 cô được tăng lên 18.000.000đ.
Step 1: HR closes the old row with ValidTo = 31 March.
VI: Bước 1: HR đóng dòng cũ với ValidTo = 31/3.
Step 2: HR adds a new row: 18,000,000 VND, ValidFrom = 1 April.
VI: Bước 2: HR thêm dòng mới: 18.000.000đ, ValidFrom = 1/4.
Step 3: payroll asks for the salary valid in the pay period.
VI: Bước 3: bảng lương hỏi mức lương có hiệu lực trong kỳ lương.`},{type:"visual",svg:`<svg viewBox="0 0 360 170">
<text class="v-title" x="10" y="20">Lan’s salary rows</text>
<text class="v-small" x="218" y="50">raise on 1 April</text>
<line class="v-line" x1="214" y1="40" x2="214" y2="106" stroke-dasharray="4 3"/>
<rect class="v-box" x="10" y="60" width="204" height="36" rx="6"/><text class="v-title" x="112" y="83" text-anchor="middle">15,000,000 VND</text>
<rect class="v-good" x="214" y="60" width="136" height="36" rx="6"/><text class="v-title" x="282" y="83" text-anchor="middle">18,000,000 VND</text>
<text class="v-muted v-small" x="44" y="118" text-anchor="middle">Jan</text><text class="v-muted v-small" x="112" y="118" text-anchor="middle">Feb</text><text class="v-muted v-small" x="180" y="118" text-anchor="middle">Mar</text><text class="v-muted v-small" x="248" y="118" text-anchor="middle">Apr</text><text class="v-muted v-small" x="316" y="118" text-anchor="middle">May</text>
<rect class="v-accent" x="10" y="130" width="340" height="28" rx="8"/><text class="v-title" x="180" y="149" text-anchor="middle">March payroll: 15,000,000</text>
</svg>`,alt:"Two salary rows on a month scale. The first row pays 15,000,000 VND from January to March. The second row pays 18,000,000 VND from April. The March payroll uses the first row.",caption:`One salary row covers one date range. Payroll picks the row by date.
VI: Mỗi dòng lương phủ một khoảng ngày. Bảng lương chọn dòng theo ngày.`},{type:"diagram",text:`SalaryHistory, employee 7
┌────────────┬────────────┬────────────┐
│ Amount     │ ValidFrom  │ ValidTo    │
├────────────┼────────────┼────────────┤
│ 15,000,000 │ 2026-01-01 │ 2026-03-31 │
│ 18,000,000 │ 2026-04-01 │ (open)     │
└────────────┴────────────┴────────────┘`},{type:"text",text:`To find the salary for one date, use this query. It checks the date against both ends of the row.
VI: Để tìm lương của một ngày, dùng truy vấn này. Truy vấn so ngày đó với cả hai đầu của dòng.`},{type:"code",code:{lang:"sql",text:`-- Salary that was valid on @date
SELECT Amount
FROM SalaryHistory
WHERE EmployeeId = @emp
  AND ValidFrom <= @date
  AND (ValidTo IS NULL OR ValidTo >= @date);`}},{type:"text",text:"Departments form a **tree**. Each row stores its parent in a `ParentId` column. The top row has no parent.\nVI: Các phòng ban tạo thành một **cây**. Mỗi dòng lưu phòng ban cha trong cột `ParentId`. Dòng trên cùng không có cha."},{type:"diagram",text:`Department tree (ParentId = parent row)
Company
├─ Sales
│   ├─ Sales North
│   └─ Sales South
└─ Finance
    └─ Payroll team`},{type:"example",title:"The reprinted payslip",text:`HR changed Lan’s salary in place, from 15,000,000 to 18,000,000 VND. In May, Lan asked for a copy of her March payslip. The system printed 18,000,000 VND, not the 15,000,000 VND she was paid.
VI: HR sửa thẳng lương của Lan từ 15.000.000đ lên 18.000.000đ. Tháng 5, Lan xin in lại phiếu lương tháng 3. Hệ thống in ra 18.000.000đ, không phải 15.000.000đ cô đã nhận.`},{type:"list",items:[`Ask: can two contracts overlap, or must one end before the next starts?
VI: Hỏi: hai hợp đồng có được chồng lên nhau không, hay phải kết thúc trước khi cái khác bắt đầu?`,`Ask: if someone moves department on the 15th, who pays for that month?
VI: Hỏi: nếu nhân viên chuyển phòng ngày 15, ai trả lương cho tháng đó?`,`Ask: can HR enter a change with a past date? Who approves it?
VI: Hỏi: HR có được nhập thay đổi với ngày trong quá khứ không? Ai duyệt?`,`Ask: what happens to records when an employee leaves and comes back?
VI: Hỏi: hồ sơ được xử lý thế nào khi nhân viên nghỉ rồi quay lại?`]},{type:"example",title:"Worked example: one year of Lan",text:`In 2026, Lan earns 15,000,000 VND for 3 months and 18,000,000 VND for 9 months. Her pay is 3 × 15,000,000 + 9 × 18,000,000 = 207,000,000 VND. One Salary column would give 12 × 18,000,000 = 216,000,000 VND, which is wrong.
VI: Năm 2026, Lan nhận 15.000.000đ mỗi tháng trong 3 tháng và 18.000.000đ mỗi tháng trong 9 tháng. Tổng là 3 × 15.000.000 + 9 × 18.000.000 = 207.000.000đ. Một cột Salary duy nhất sẽ cho 12 × 18.000.000 = 216.000.000đ, sai.`},{type:"exercise",title:`Write the salary rows
VI: Viết các dòng lương`,task:`Lan earns 18,000,000 VND from 1 April 2026, with no end date. A raise to 20,000,000 VND starts on 1 July 2026. Write the rows of the table. Columns: Amount, ValidFrom, ValidTo.
VI: Lan nhận 18.000.000đ từ ngày 1/4/2026, chưa có ngày kết thúc. Mức tăng lên 20.000.000đ bắt đầu từ ngày 1/7/2026. Hãy viết các dòng của bảng. Các cột: Amount, ValidFrom, ValidTo.`,hint:`Close the old row the day before the new row starts.
VI: Hãy đóng dòng cũ vào ngày trước ngày dòng mới bắt đầu.`,solution:`Row 1: 18,000,000 | 2026-04-01 | 2026-06-30. Row 2: 20,000,000 | 2026-07-01 | (open).
VI: Dòng 1: 18.000.000 | 2026-04-01 | 2026-06-30. Dòng 2: 20.000.000 | 2026-07-01 | (trống, còn mở).
June pays 18,000,000 VND. July pays 20,000,000 VND.
VI: Tháng 6 trả 18.000.000đ. Tháng 7 trả 20.000.000đ.`},{type:"text",text:`Common mistake: HR adds the new row but forgets to close the old one. Then the old row has no end date. In April both rows are valid, so payroll finds two salaries. Close the old row in the same step.
VI: Lỗi thường gặp: HR thêm dòng mới nhưng quên đóng dòng cũ. Khi đó dòng cũ không có ngày kết thúc. Tháng 4 cả hai dòng đều còn hiệu lực, nên bảng lương thấy hai mức lương. Hãy đóng dòng cũ trong cùng một bước.`}],remember:`HR data has a timeline. Never overwrite it: add a new row with the date it starts.
VI: Dữ liệu nhân sự có dòng thời gian. Đừng ghi đè: thêm dòng mới với ngày bắt đầu hiệu lực.`,questions:[{id:"hr-payroll.records.1",kind:"mcq",difficulty:"easy",prompt:"Why store salary as rows with `ValidFrom` and `ValidTo`, instead of one `Salary` column on the employee?\nVI: Tại sao lưu lương thành nhiều dòng có `ValidFrom` và `ValidTo`, thay vì một cột `Salary` trên nhân viên?",choices:["It makes the employee table smaller and faster","Old periods can still be calculated with the right salary","It is the only way to store numbers with decimals","It stops two people from editing the same employee"],answer:1,why:`Payroll, payslip reprints and reports for past months need the salary that was valid then. One column only knows today’s value.
VI: Tính lương, in lại phiếu lương và báo cáo tháng cũ cần mức lương có hiệu lực lúc đó. Một cột chỉ biết giá trị hôm nay.`},{id:"hr-payroll.records.2",kind:"code",difficulty:"hard",prompt:"The table has the two rows from the lesson (old row ends 2026-03-31, new row starts 2026-04-01). What does this query return for `@d = '2026-03-31'`?\nVI: Bảng có hai dòng như trong bài. Câu truy vấn này trả về gì khi `@d = '2026-03-31'`?",code:{lang:"sql",text:`SELECT Amount FROM SalaryHistory
WHERE EmployeeId = 7
  AND ValidFrom <= @d
  AND (ValidTo IS NULL OR ValidTo > @d);`},choices:["15,000,000 VND","18,000,000 VND","No row","Both rows"],answer:2,why:"`ValidTo` is the last valid day, so the check must be `>=`. With `>`, the old row is excluded on 31 March, and the new row has not started yet.\nVI: `ValidTo` là ngày hiệu lực cuối cùng, nên phải so sánh `>=`. Dùng `>` thì dòng cũ bị loại vào ngày 31/3, còn dòng mới chưa bắt đầu.",remember:`ValidTo is the last valid day, so test it with >=.
VI: ValidTo là ngày cuối cùng còn hiệu lực, nên kiểm tra bằng >=.`},{id:"hr-payroll.records.3",kind:"debug",difficulty:"medium",prompt:`A cost report for January now shows Minh in Finance. In January he was in Sales. He moved in March. What is the most likely cause?
VI: Báo cáo chi phí tháng 1 giờ hiện Minh ở phòng Tài chính. Tháng 1 anh ấy ở phòng Kinh doanh, tháng 3 mới chuyển. Nguyên nhân có khả năng nhất là gì?`,choices:["The report cache is old and must be cleared","Department is one column that was overwritten","The org chart tree has a loop in ParentId","Minh has two employee codes in the system"],answer:1,why:`If the department is stored in place, old reports read today’s value. A history table with dates keeps January in Sales.
VI: Nếu phòng ban được ghi đè, báo cáo cũ sẽ đọc giá trị hiện tại. Bảng lịch sử có ngày hiệu lực giữ tháng 1 ở phòng Kinh doanh.`},{id:"hr-payroll.records.4",kind:"truefalse",difficulty:"easy",prompt:"A department table with a `ParentId` column can store the whole org chart as a tree.\nVI: Bảng phòng ban có cột `ParentId` có thể lưu cả sơ đồ tổ chức dạng cây.",choices:["True","False"],answer:0,why:`Each department points to its parent. The top one has no parent. A recursive query can walk the tree.
VI: Mỗi phòng ban trỏ tới phòng ban cha. Phòng ban cao nhất không có cha. Truy vấn đệ quy có thể duyệt cả cây.`}]},{id:"hr-payroll.attendance",title:"Attendance and shifts · Chấm công và ca làm việc",summary:`Turn raw check-in and check-out punches into a correct timesheet.
VI: Biến dữ liệu quẹt thẻ vào ra thành bảng chấm công đúng.`,minutes:5,level:"basic",blocks:[{type:"text",text:`In this lesson you learn how to turn raw punches into a correct timesheet.
VI: Trong bài này, bạn học cách biến dữ liệu quẹt thẻ thành bảng chấm công đúng.`},{type:"text",text:`A time clock (fingerprint, face or card device) only records **punches**: who, which device, what time. A **punch** is one scan.
VI: Máy chấm công (vân tay, khuôn mặt hoặc thẻ) chỉ ghi các **lượt chấm**: ai, máy nào, mấy giờ. Một lượt chấm là một lần quét.
The system must match punches to a **shift** (ca làm việc). A shift has a planned start and end. Then the system knows if a day is OK, late or missing.
VI: Hệ thống phải ghép lượt chấm với **ca làm việc**. Ca có giờ bắt đầu và giờ kết thúc theo kế hoạch. Nhờ đó hệ thống biết ngày đó đủ công, đi muộn hay thiếu.`},{type:"visual",svg:`<svg viewBox="0 0 360 186">
<text class="v-muted v-small" x="82" y="22" text-anchor="middle">Mon 8 Jun</text><text class="v-muted v-small" x="212" y="22" text-anchor="middle">Tue 9 Jun</text>
<line class="v-line" x1="115" y1="28" x2="115" y2="92" stroke-dasharray="4 3"/><text class="v-muted v-small" x="115" y="104" text-anchor="middle">midnight</text>
<rect class="v-soft" x="50" y="40" width="260" height="36" rx="6"/><text class="v-small" x="82" y="63" text-anchor="middle">Night shift</text><text class="v-small" x="250" y="63" text-anchor="middle">8 hours</text>
<circle class="v-solid" cx="50" cy="58" r="6"/><circle class="v-solid" cx="310" cy="58" r="6"/>
<text class="v-title" x="50" y="130" text-anchor="middle">IN 22:00</text><text class="v-title" x="310" y="130" text-anchor="middle">OUT 06:03</text>
<rect class="v-good" x="50" y="144" width="260" height="32" rx="8"/><text class="v-title" x="180" y="165" text-anchor="middle">Work date: Mon (shift start)</text>
</svg>`,alt:"A timeline of a night shift. The worker scans IN at 22:00 on Monday and OUT at 06:03 on Tuesday. Both scans belong to one work date: Monday, the day the shift starts.",caption:`One shift, two calendar dates, one work date.
VI: Một ca, hai ngày lịch, một ngày công.`},{type:"text",text:`Story: Tan Phat shoe factory runs a night shift from 22:00 to 06:00. Binh scans his finger at 22:12 and again at 06:03.
VI: Câu chuyện: xưởng giày Tân Phát có ca đêm từ 22:00 đến 06:00. Bình quét vân tay lúc 22:12 và lúc 06:03.
The system finds the shift whose time window holds each punch. It keeps the first IN and the last OUT.
VI: Hệ thống tìm ca có khung giờ chứa từng lượt chấm. Hệ thống giữ lượt vào đầu tiên và lượt ra cuối cùng.`},{type:"diagram",text:`Device ──► RawPunch ──► match to shift
                          │
                          ▼
        Timesheet (one row per day)
                          │
                          ▼
                  Payroll (work days)`},{type:"text",text:`Keep the raw punches as they came. Calculate the timesheet from them. Then you can recalculate after a rule changes.
VI: Giữ nguyên dữ liệu chấm công gốc. Tính bảng công từ đó. Khi quy định đổi, bạn có thể tính lại.`},{type:"example",title:"The factory night shift",text:`A worker checks in Monday 22:00 and out Tuesday 06:00. If you group punches by calendar date, Monday has only IN and Tuesday has only OUT. Both days show a missing punch.
VI: Công nhân vào ca 22:00 thứ Hai, ra ca 06:00 thứ Ba. Nếu gom lượt chấm theo ngày lịch, thứ Hai chỉ có giờ vào, thứ Ba chỉ có giờ ra. Cả hai ngày đều báo thiếu công.`},{type:"visual",svg:`<svg viewBox="0 0 360 200">
<text class="v-title" x="10" y="18">Early scan at 21:40</text>
<text class="v-muted v-small" x="20" y="40" text-anchor="middle">20:00</text><text class="v-muted v-small" x="84" y="40" text-anchor="middle">22:00</text><text class="v-muted v-small" x="148" y="40" text-anchor="middle">00:00</text><text class="v-muted v-small" x="212" y="40" text-anchor="middle">02:00</text><text class="v-muted v-small" x="276" y="40" text-anchor="middle">04:00</text><text class="v-muted v-small" x="340" y="40" text-anchor="middle">06:00</text>
<text class="v-small" x="10" y="60">Window opens 2 hours early</text>
<rect class="v-good" x="20" y="66" width="320" height="22" rx="5"/><circle class="v-solid" cx="73" cy="77" r="5"/>
<text class="v-good-text v-small" x="10" y="106">Matched: night shift</text>
<text class="v-small" x="10" y="128">Window opens at 22:00</text>
<rect class="v-box" x="84" y="134" width="256" height="22" rx="5"/><circle class="v-solid" cx="73" cy="145" r="5"/>
<text class="v-bad-text v-small" x="10" y="174">Not matched: looks missing</text>
<text class="v-muted v-small" x="10" y="194">Early window fixes it</text>
</svg>`,alt:"Two windows on an hour scale. A window that opens two hours early catches a 21:40 scan, so it matches the night shift. A window that opens at 22:00 misses that scan, so it looks missing.",caption:`A scan before the shift start must fall inside the window.
VI: Lượt quẹt trước giờ vào ca phải nằm trong khung giờ của ca.`},{type:"diagram",text:`Timesheet, employee 7
Date  Shift In    Out   Status
───── ───── ───── ───── ───────────
06-08 Day   07:58 17:02 OK
06-09 Day   08:17 17:00 Late 17 min
06-10 Day   07:55 --    Missing out
06-11 Night 21:59 06:03 OK`},{type:"list",items:[`Missing punch: show it, and let the employee send a correction for approval.
VI: Thiếu lượt chấm: hiện ra, và cho nhân viên gửi đơn sửa để duyệt.`,`Double punch: two scans one minute apart. Keep the first IN and the last OUT.
VI: Quẹt đôi: hai lần quẹt cách nhau một phút. Giữ giờ vào đầu tiên và giờ ra cuối cùng.`,`Grace time (cho phép trễ): is 08:05 late? HR sets the minutes, not the developer.
VI: Cho phép trễ: 08:05 có tính là muộn không? HR quyết định số phút, không phải lập trình viên.`,`Device clock wrong after a power cut: store device time and server time.
VI: Đồng hồ máy sai sau khi mất điện: lưu cả giờ của máy và giờ của máy chủ.`]},{type:"example",title:"Worked example: Binh’s night",text:`Binh worked from 22:12 to 06:03. That is 7 hours 51 minutes. The shift has a 1 hour break, so he worked 6 hours 51 minutes. He is 12 minutes late.
VI: Bình làm từ 22:12 đến 06:03, tức 7 giờ 51 phút. Ca có 1 giờ nghỉ, nên anh làm 6 giờ 51 phút. Anh đi muộn 12 phút.`},{type:"exercise",title:`Find the hours and the late minutes
VI: Tìm số giờ làm và số phút đi muộn`,task:`The night shift runs from 22:00 to 06:00. It has a 1-hour break. Binh scans IN at 22:14 and OUT at 06:20 the next morning. How many hours did he work? How many minutes was he late?
VI: Ca đêm chạy từ 22:00 đến 06:00. Ca có 1 giờ nghỉ. Bình quét vào lúc 22:14 và quét ra lúc 06:20 sáng hôm sau. Anh làm bao nhiêu giờ? Anh đi muộn bao nhiêu phút?`,hint:`Count from IN to OUT first. Then take off the break. Late minutes = IN minus the shift start.
VI: Đếm từ giờ vào đến giờ ra trước. Sau đó trừ giờ nghỉ. Số phút muộn = giờ vào trừ giờ bắt đầu ca.`,solution:`22:14 to 06:20 is 8 hours 6 minutes. Minus the 1-hour break: 7 hours 6 minutes. Late: 22:14 minus 22:00 = 14 minutes.
VI: Từ 22:14 đến 06:20 là 8 giờ 6 phút. Trừ 1 giờ nghỉ: 7 giờ 6 phút. Muộn: 22:14 trừ 22:00 = 14 phút.`},{type:"text",text:`Common mistake: the shift window is too narrow. A worker who scans at 21:40 falls outside the window. The scan is ignored, and the day shows missing. Give each shift an early window, that is, 2 hours before the start.
VI: Lỗi thường gặp: khung giờ của ca quá hẹp. Công nhân quẹt lúc 21:40 nằm ngoài khung giờ. Lượt quẹt bị bỏ qua và ngày đó hiện thiếu công. Hãy cho mỗi ca một khung vào sớm, tức 2 giờ trước giờ bắt đầu.`}],remember:`Keep raw punches. Match them to shifts, not to calendar dates.
VI: Giữ dữ liệu chấm công gốc. Ghép theo ca làm việc, không theo ngày lịch.`,questions:[{id:"hr-payroll.attendance.1",kind:"debug",difficulty:"medium",prompt:`Night-shift workers show "missing punch" on two days every week. Day-shift workers are fine. What is the most likely cause?
VI: Công nhân ca đêm bị báo "thiếu công" hai ngày mỗi tuần. Ca ngày thì bình thường. Nguyên nhân có khả năng nhất là gì?`,choices:["Punches are grouped by calendar date, not by shift","The time clock cannot read fingers at night","The night shift has no lunch break configured","The timesheet table has too many rows to load"],answer:0,why:`A shift that crosses midnight has IN on one date and OUT on the next. Matching by shift window keeps both punches together.
VI: Ca qua nửa đêm có giờ vào ngày này và giờ ra ngày sau. Ghép theo khung giờ của ca thì hai lượt chấm nằm chung một ngày công.`},{id:"hr-payroll.attendance.2",kind:"scenario",difficulty:"easy",prompt:`An employee forgot to check out. What should the system do?
VI: Nhân viên quên chấm công lúc ra về. Hệ thống nên làm gì?`,choices:["Assume 17:00 and count a full day","Delete the IN punch to keep data clean","Mark it missing and allow an approved fix","Count zero hours and say nothing"],answer:2,why:`Guessing the time hides the problem and can pay wrong hours. A visible status plus a correction request with approval keeps the data honest.
VI: Tự đoán giờ sẽ che mất lỗi và có thể trả sai giờ công. Hiện trạng thái thiếu và cho gửi đơn điều chỉnh có duyệt thì dữ liệu mới đúng.`},{id:"hr-payroll.attendance.3",kind:"compare",difficulty:"medium",prompt:`Design A saves only the final timesheet. Design B saves raw punches and calculates the timesheet from them. Which is better?
VI: Thiết kế A chỉ lưu bảng công cuối cùng. Thiết kế B lưu lượt chấm gốc rồi tính bảng công từ đó. Cách nào tốt hơn?`,choices:["A, because it uses less storage","B, because you can recheck and recalculate","Both are the same for payroll","A, because raw punches are not needed after a day"],answer:1,why:`Rules change and employees dispute hours. With raw punches you can show the evidence and recalculate. With only the result, you cannot.
VI: Quy định thay đổi và nhân viên có thể khiếu nại giờ công. Có dữ liệu gốc thì bạn đưa được bằng chứng và tính lại. Chỉ có kết quả thì không.`},{id:"hr-payroll.attendance.4",kind:"debug",difficulty:"hard",prompt:`On one day, everyone at the Hai Phong site is "late" by about one hour. Other sites are normal. What do you check first?
VI: Có một ngày, cả chi nhánh Hải Phòng đều bị "đi muộn" khoảng một giờ. Các chi nhánh khác bình thường. Bạn kiểm tra gì trước?`,choices:["The late rule in the shift settings","The clock and time zone of that device","The salary of the people at that site","The network speed of the head office"],answer:1,why:`One site, one day, the same offset for everyone points to the device clock. Compare device time with server receive time.
VI: Một chi nhánh, một ngày, mọi người lệch cùng một khoảng thì thường do đồng hồ của máy. Hãy so giờ trên máy với giờ máy chủ nhận dữ liệu.`}]},{id:"hr-payroll.leave",title:"Leave management · Quản lý nghỉ phép",summary:`Leave types, balances, accrual, approval and overlapping requests.
VI: Loại nghỉ, quỹ phép, cộng phép, phê duyệt và đơn nghỉ trùng ngày.`,minutes:5,level:"practical",blocks:[{type:"text",text:`In this lesson you learn how to count leave days and keep a correct balance.
VI: Trong bài này, bạn học cách đếm số ngày nghỉ và giữ quỹ phép luôn đúng.`},{type:"text",text:`Each **leave type** (loại nghỉ) has its own rules. Examples: annual leave, sick leave, unpaid leave, wedding leave and maternity leave.
VI: Mỗi **loại nghỉ** có quy định riêng: phép năm, nghỉ ốm, nghỉ không lương, nghỉ cưới, thai sản.
Some leave is paid by the company. Some is paid by social insurance. Some is unpaid.
VI: Có loại công ty trả lương. Có loại do bảo hiểm xã hội chi trả. Có loại không có lương.`},{type:"visual",svg:`<svg viewBox="0 0 360 222"><defs><marker id="hrlea1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-box" x="10" y="10" width="230" height="30" rx="6"/><text class="v-small" x="125" y="30" text-anchor="middle">1 Employee sends request</text>
<line class="v-line" x1="125" y1="40" x2="125" y2="56" marker-end="url(#hrlea1)"/>
<rect class="v-box" x="10" y="56" width="230" height="30" rx="6"/><text class="v-small" x="125" y="76" text-anchor="middle">2 Enough balance?</text>
<line class="v-line" x1="125" y1="86" x2="125" y2="102" marker-end="url(#hrlea1)"/>
<rect class="v-box" x="10" y="102" width="230" height="30" rx="6"/><text class="v-small" x="125" y="122" text-anchor="middle">3 No overlap?</text>
<line class="v-line" x1="125" y1="132" x2="125" y2="148" marker-end="url(#hrlea1)"/>
<rect class="v-box" x="10" y="148" width="230" height="30" rx="6"/><text class="v-small" x="125" y="168" text-anchor="middle">4 Manager approves</text>
<line class="v-line" x1="125" y1="178" x2="125" y2="194" marker-end="url(#hrlea1)"/>
<rect class="v-good" x="10" y="194" width="230" height="26" rx="6"/><text class="v-title" x="125" y="212" text-anchor="middle">5 Ledger line: -3.0 days</text>
<line class="v-line" x1="240" y1="71" x2="262" y2="71" marker-end="url(#hrlea1)"/><rect class="v-bad" x="262" y="56" width="90" height="30" rx="6"/><text class="v-small" x="307" y="76" text-anchor="middle">No: reject</text>
<line class="v-line" x1="240" y1="117" x2="262" y2="117" marker-end="url(#hrlea1)"/><rect class="v-bad" x="262" y="102" width="90" height="30" rx="6"/><text class="v-small" x="307" y="122" text-anchor="middle">No: reject</text>
</svg>`,alt:"A vertical flow of five steps. The employee sends a request. The system checks the balance and the overlap. The manager approves. A minus line goes into the ledger. Each check has a reject exit.",caption:`Checks come first. Only an approved request writes to the ledger.
VI: Kiểm tra trước. Chỉ đơn đã duyệt mới ghi vào sổ cái.`},{type:"text",text:`Story: Mai works at Binh An clinic. Her annual leave balance is 3.5 days. She asks for Thursday 4 June to Monday 8 June.
VI: Câu chuyện: Mai làm ở phòng khám Bình An. Quỹ phép năm của cô còn 3,5 ngày. Cô xin nghỉ từ thứ Năm 4/6 đến thứ Hai 8/6.
The system counts only work days: Thursday, Friday and Monday. That is 3 days, not 5.
VI: Hệ thống chỉ đếm ngày làm việc: thứ Năm, thứ Sáu và thứ Hai. Đó là 3 ngày, không phải 5.`},{type:"visual",svg:`<svg viewBox="0 0 360 150">
<text class="v-title" x="10" y="20">Mai’s request: 4 to 8 June</text>
<rect class="v-good" x="10" y="32" width="60" height="50" rx="6"/><text class="v-title" x="40" y="52" text-anchor="middle">Thu 4</text><text class="v-small" x="40" y="72" text-anchor="middle">Work</text>
<rect class="v-good" x="79" y="32" width="60" height="50" rx="6"/><text class="v-title" x="109" y="52" text-anchor="middle">Fri 5</text><text class="v-small" x="109" y="72" text-anchor="middle">Work</text>
<rect class="v-soft" x="148" y="32" width="60" height="50" rx="6"/><text class="v-muted v-small" x="178" y="52" text-anchor="middle">Sat 6</text><text class="v-muted v-small" x="178" y="72" text-anchor="middle">Off</text>
<rect class="v-soft" x="217" y="32" width="60" height="50" rx="6"/><text class="v-muted v-small" x="247" y="52" text-anchor="middle">Sun 7</text><text class="v-muted v-small" x="247" y="72" text-anchor="middle">Off</text>
<rect class="v-good" x="286" y="32" width="60" height="50" rx="6"/><text class="v-title" x="316" y="52" text-anchor="middle">Mon 8</text><text class="v-small" x="316" y="72" text-anchor="middle">Work</text>
<rect class="v-accent" x="10" y="96" width="340" height="32" rx="8"/><text class="v-title" x="180" y="117" text-anchor="middle">3 work days, not 5</text>
<text class="v-muted v-small" x="10" y="144">Weekend days are skipped</text>
</svg>`,alt:"Five day boxes from Thursday to Monday. Thursday, Friday and Monday are work days. Saturday and Sunday are off days. So the request costs 3 days, not 5.",caption:`Only work days count against the leave balance.
VI: Chỉ ngày làm việc mới bị trừ vào quỹ phép.`},{type:"text",text:`The **balance** (quỹ phép) is how many days are left. Build it as a **ledger** (sổ cái) of plus and minus lines, like a bank account.
VI: **Quỹ phép** là số ngày còn lại. Hãy lưu nó như một **sổ cái** gồm các dòng cộng và trừ, giống tài khoản ngân hàng.
**Accrual** (cộng dồn phép) means leave is added bit by bit. For example, 12 days a year can accrue as 1 day each month.
VI: **Cộng dồn phép** (accrual) là phép được cộng dần theo thời gian. Ví dụ 12 ngày một năm có thể cộng 1 ngày mỗi tháng.
**Carry-over** (chuyển năm) means unused days move to next year, up to a cut-off date. Then they expire.
VI: **Chuyển năm** (carry-over) là ngày chưa dùng sang năm sau, đến một ngày chốt. Sau đó chúng hết hạn.`},{type:"visual",svg:`<svg viewBox="0 0 360 188">
<text class="v-title" x="10" y="20">Mai’s leave balance</text>
<text class="v-small" x="10" y="50">Before the request: 3.5 days</text>
<rect class="v-soft" x="10" y="56" width="280" height="26" rx="5"/><text class="v-title" x="150" y="74" text-anchor="middle">3.5 days</text>
<text class="v-small" x="10" y="104">After approval: 0.5 left</text>
<rect class="v-warn" x="10" y="110" width="240" height="26" rx="5"/><text class="v-title" x="130" y="128" text-anchor="middle">3.0 used</text>
<rect class="v-good" x="250" y="110" width="40" height="26" rx="5"/><text class="v-title" x="270" y="128" text-anchor="middle">0.5</text>
<rect class="v-bad" x="10" y="150" width="340" height="28" rx="8"/><text class="v-title" x="180" y="169" text-anchor="middle">Reject or cancel: +3.0 back</text>
</svg>`,alt:"Two bars for Mai’s leave. The top bar is 3.5 days before the request. After approval, 3.0 days are used and 0.5 days are left. A reject or cancel adds 3.0 days back.",caption:`Approval moves days out of the balance. Reject or cancel must move them back.
VI: Duyệt đơn sẽ trừ ngày khỏi quỹ phép. Từ chối hoặc hủy phải cộng lại ngày đó.`},{type:"diagram",text:`LeaveLedger, annual leave 2026
Date   Reason      Days   Balance
────── ─────────── ────── ───────
01-01  Carry-over  +2.0   2.0
01-31  Accrual     +1.0   3.0
02-28  Accrual     +1.0   4.0
03-10  Taken       -1.5   2.5
03-31  Accrual     +1.0   3.5`},{type:"diagram",text:`Draft ──► Submitted ──► Approved ──► Taken
              │             │
              ▼             ▼
          Rejected      Cancelled
                     (days go back)`},{type:"code",code:{lang:"sql",text:`-- Does the new request [@from, @to]
-- overlap an existing one?
SELECT COUNT(*) FROM LeaveRequest
WHERE EmployeeId = @emp
  AND Status IN ('Submitted', 'Approved')
  AND FromDate <= @to
  AND ToDate   >= @from;`}},{type:"list",items:[`Half day: store Morning or Afternoon, and amount 0.5.
VI: Nửa ngày: lưu buổi Sáng hoặc Chiều, và số ngày là 0,5.`,`Count working days only: skip weekly days off and public holidays.
VI: Chỉ đếm ngày làm việc: bỏ qua ngày nghỉ hằng tuần và ngày lễ.`,`Ask: can the balance go negative? Who approves when the manager is away?
VI: Hỏi: quỹ phép có được âm không? Ai duyệt khi quản lý đi vắng?`,`Ask: what happens to unused days when someone leaves the company?
VI: Hỏi: ngày phép chưa dùng được xử lý thế nào khi nhân viên nghỉ việc?`]},{type:"example",title:"Worked example: Mai’s balance",text:`Balance is 3.5 days. The request is 3 days. After approval the ledger gets a −3.0 line, and the balance is 0.5. A new request for 1 day is refused, unless policy allows a negative balance.
VI: Quỹ phép là 3,5 ngày. Đơn xin 3 ngày. Sau khi duyệt, sổ cái có dòng −3,0 và quỹ phép còn 0,5. Đơn mới xin 1 ngày bị từ chối, trừ khi chính sách cho phép số âm.`},{type:"exercise",title:`Count the leave days
VI: Đếm số ngày nghỉ phép`,task:`Mai has 4.0 days of leave. She asks for Friday 12 June to Tuesday 16 June 2026. Saturday and Sunday are off days. No public holiday falls in this range. How many days does she use? What is her balance after approval? Then the request is cancelled. What is her balance now?
VI: Mai còn 4,0 ngày phép. Cô xin nghỉ từ thứ Sáu 12/6 đến thứ Ba 16/6/2026. Thứ Bảy và Chủ nhật là ngày nghỉ. Khoảng này không có ngày lễ. Cô dùng bao nhiêu ngày? Quỹ phép sau khi duyệt là bao nhiêu? Sau đó đơn bị hủy. Quỹ phép bây giờ là bao nhiêu?`,hint:`Count only Monday to Friday. A cancel adds the days back as a plus line.
VI: Chỉ đếm từ thứ Hai đến thứ Sáu. Khi hủy, cộng lại số ngày bằng một dòng cộng.`,solution:`Work days: Fri 12, Mon 15 and Tue 16 = 3 days. Balance after approval: 4.0 − 3.0 = 1.0. After the cancel: 1.0 + 3.0 = 4.0.
VI: Ngày làm việc: thứ Sáu 12, thứ Hai 15 và thứ Ba 16 = 3 ngày. Quỹ phép sau khi duyệt: 4,0 − 3,0 = 1,0. Sau khi hủy: 1,0 + 3,0 = 4,0.`},{type:"text",text:`Common mistake: take the days when the request is sent, but never give them back on reject or cancel. Every change that frees the days must add a +3.0 line.
VI: Lỗi thường gặp: trừ ngày phép lúc gửi đơn nhưng không trả lại khi bị từ chối hoặc hủy. Mọi thay đổi làm nhả ngày phép đều phải thêm một dòng +3,0.`}],remember:`A leave balance is a ledger of dated lines, not one number you edit.
VI: Quỹ phép là sổ ghi các dòng có ngày, không phải một con số bị sửa đi sửa lại.`,questions:[{id:"hr-payroll.leave.1",kind:"code",difficulty:"medium",prompt:`An approved leave runs from 10 to 12 June. A new request is for 12 to 13 June. Does the overlap check flag it?
VI: Đơn nghỉ đã duyệt từ 10 đến 12/6. Đơn mới xin từ 12 đến 13/6. Câu kiểm tra trùng có phát hiện không?`,code:{lang:"sql",text:`-- existing: FromDate 06-10, ToDate 06-12
-- new:      @from 06-12,    @to 06-13
AND FromDate <= @to
AND ToDate   >= @from`},choices:["Yes, both conditions are true","No, only the first one is true","No, the dates only touch","Only if both are approved"],answer:0,why:`06-10 <= 06-13 is true, and 06-12 >= 06-12 is true. Both requests include 12 June, so they really overlap.
VI: 10/6 <= 13/6 đúng, và 12/6 >= 12/6 cũng đúng. Cả hai đơn đều có ngày 12/6 nên đúng là bị trùng.`},{id:"hr-payroll.leave.2",kind:"compare",difficulty:"medium",prompt:`An employee asks: "Why is my balance 3.5 days?" Which design can answer best?
VI: Nhân viên hỏi: "Sao quỹ phép của tôi còn 3,5 ngày?" Thiết kế nào trả lời tốt nhất?`,choices:["One Balance column that is updated in place","A ledger of dated lines with a reason each","A yearly Excel file kept by HR","A Balance column plus a last-updated date"],answer:1,why:`A ledger shows every plus and minus with its date and reason. One number shows only the result, not how you got there.
VI: Sổ cái cho thấy từng dòng cộng trừ, có ngày và lý do. Một con số chỉ cho thấy kết quả, không cho thấy vì sao.`},{id:"hr-payroll.leave.3",kind:"debug",difficulty:"hard",prompt:`A leave from Friday to the next Thursday takes 7 days from the balance. HR expected 5. What is the most likely bug?
VI: Đơn nghỉ từ thứ Sáu đến thứ Năm tuần sau bị trừ 7 ngày phép. HR nghĩ là 5. Lỗi có khả năng nhất là gì?`,choices:["The request was approved twice by mistake","The code counts calendar days, not work days","Accrual for this month did not run yet","The half-day flag was set on both ends"],answer:1,why:`Saturday and Sunday were counted. Leave days must use the work calendar of that employee, including public holidays.
VI: Thứ Bảy và Chủ nhật đã bị tính. Ngày nghỉ phải tính theo lịch làm việc của nhân viên đó, có tính cả ngày lễ.`},{id:"hr-payroll.leave.4",kind:"truefalse",difficulty:"easy",prompt:`An employee has approved leave for the morning and checks in at 13:00. The system should mark her late.
VI: Nhân viên được duyệt nghỉ buổi sáng và chấm công vào lúc 13:00. Hệ thống nên ghi nhận cô ấy đi muộn.`,choices:["True","False"],answer:1,why:`Attendance must read approved leave. Her work starts in the afternoon, so 13:00 is on time.
VI: Chấm công phải đọc dữ liệu nghỉ phép đã duyệt. Cô ấy làm buổi chiều nên 13:00 là đúng giờ.`}]},{id:"hr-payroll.overtime",title:"Overtime · Làm thêm giờ",summary:`Approved extra hours, rates by day type, and caps.
VI: Giờ làm thêm được duyệt, hệ số theo loại ngày và giới hạn giờ.`,minutes:5,level:"practical",blocks:[{type:"text",text:`In this lesson you learn how to pay overtime with the right rate and cap.
VI: Trong bài này, bạn học cách tính tiền làm thêm với đúng hệ số và giới hạn.`},{type:"text",text:`**Overtime** (OT, làm thêm giờ) is work outside the normal schedule. Most companies need approval before the work.
VI: **Làm thêm giờ** (OT) là thời gian làm ngoài lịch làm việc bình thường. Đa số công ty yêu cầu duyệt trước khi làm.`},{type:"text",text:`A **rate** (hệ số) is a multiplier. 150% means 1.5 times the hourly rate. A **day type** (loại ngày) is a normal day, a weekly day off, or a public holiday. A **weekly day off** is a rest day each week.
VI: **Hệ số** là số nhân với lương giờ. 150% nghĩa là 1,5 lần lương giờ. **Loại ngày** là ngày thường, ngày nghỉ hằng tuần hoặc ngày lễ.`},{type:"visual",svg:`<svg viewBox="0 0 360 222">
<text class="v-title" x="10" y="22">Rate by day type (example)</text>
<text class="v-small" x="10" y="58">Normal day</text><rect class="v-accent" x="110" y="42" width="120" height="26" rx="5"/><text class="v-title" x="222" y="60" text-anchor="end">150%</text>
<text class="v-small" x="10" y="94">Weekly day off</text><rect class="v-accent" x="110" y="78" width="160" height="26" rx="5"/><text class="v-title" x="262" y="96" text-anchor="end">200%</text>
<text class="v-small" x="10" y="130">Public holiday</text><rect class="v-warn" x="110" y="114" width="240" height="26" rx="5"/><text class="v-title" x="342" y="132" text-anchor="end">300%</text>
<rect class="v-box" x="10" y="156" width="340" height="56" rx="8"/><text class="v-title" x="180" y="179" text-anchor="middle">Pay = approved hours</text><text class="v-title" x="180" y="200" text-anchor="middle">× hourly rate × day rate</text>
</svg>`,alt:"A bar chart of three example overtime rates. A normal day is 150 percent. A weekly day off is 200 percent. A public holiday is 300 percent. Below it is the formula: approved hours times hourly rate times day rate.",caption:`The same hour is worth more on a rest day or a holiday.
VI: Cùng một giờ làm, ngày nghỉ hoặc ngày lễ được trả cao hơn.`},{type:"text",text:`Story: Nam works at Tan Phat shoe factory. His hourly rate is 60,000 VND. On Tuesday he starts OT at 17:30. The manager approves only 2 hours, to 19:30.
VI: Câu chuyện: Nam làm ở xưởng giày Tân Phát. Lương giờ của anh là 60.000đ. Thứ Ba anh làm thêm từ 17:30. Quản lý chỉ duyệt 2 giờ, đến 19:30.
Nam stays until 21:00, so the punches show 3.5 hours. Payroll checks the approval, the punches and the day type, then pays.
VI: Nam ở lại đến 21:00, nên dữ liệu chấm công cho thấy 3,5 giờ. Bảng lương kiểm tra phiếu duyệt, dữ liệu chấm công và loại ngày, rồi mới trả tiền.`},{type:"visual",svg:`<svg viewBox="0 0 360 200">
<text class="v-title" x="10" y="20">Nam’s hours on Tuesday</text>
<text class="v-small" x="10" y="48">Approved by manager: 2 h</text>
<rect class="v-good" x="10" y="54" width="180" height="26" rx="5"/><text class="v-title" x="100" y="72" text-anchor="middle">Paid: 2 h</text>
<text class="v-small" x="10" y="100">Punches show: 3.5 h</text>
<rect class="v-good" x="10" y="106" width="180" height="26" rx="5"/><text class="v-title" x="100" y="124" text-anchor="middle">Paid: 2 h</text>
<rect class="v-warn" x="190" y="106" width="135" height="26" rx="5"/><text class="v-title" x="257" y="124" text-anchor="middle">Extra: 1.5 h</text>
<rect class="v-box" x="10" y="150" width="340" height="36" rx="8"/><text class="v-title" x="180" y="173" text-anchor="middle">Pay 2 h, flag 1.5 h</text>
</svg>`,alt:"Two bars for Nam’s Tuesday. The manager approved 2 hours, and the punches show 3.5 hours. Only the 2 approved hours are paid. The extra 1.5 hours are flagged for the manager.",caption:`Pay the approved hours. Show the extra hours to the manager.
VI: Trả theo giờ đã duyệt. Báo phần giờ dư cho quản lý.`},{type:"text",text:`The pay rate depends on the **day type**. These are the usual rates in Vietnam. Check the current rate with your payroll rules.
VI: Hệ số lương phụ thuộc vào **loại ngày**. Đây là các mức thường dùng ở Việt Nam. Hãy kiểm tra mức hiện hành theo quy định tính lương.`},{type:"diagram",text:`Day type          Rate (example only)
───────────────── ───────────────────
Normal work day   150%
Weekly day off    200%
Public holiday    300%
Night hours       extra; ask HR how`},{type:"example",title:"Sunday work",text:`Hourly rate 100,000 VND. Sunday is the weekly day off. Lan works 3 approved hours. Example: 3 × 100,000 × 200% = 600,000 VND.
VI: Lương giờ 100.000đ. Chủ nhật là ngày nghỉ hằng tuần. Lan làm 3 giờ đã duyệt. Ví dụ: 3 × 100.000 × 200% = 600.000đ.`},{type:"code",code:{lang:"csharp",text:`// Holiday first: a holiday can fall on Sunday
DayType GetDayType(DateOnly d, Calendar cal)
{
    if (cal.IsPublicHoliday(d))
        return DayType.Holiday;
    if (cal.IsWeeklyOff(d))
        return DayType.WeeklyOff;
    return DayType.Normal;
}
// Rates come from a table with ValidFrom,
// not from constants in code.`}},{type:"text",text:`The law also limits OT hours per day, month and year. The **cap** (giới hạn) is the most hours allowed. For example, the monthly cap might be 40 hours. Check every cap against the **total**, not only one request.
VI: Luật cũng giới hạn số giờ làm thêm theo ngày, tháng và năm. **Giới hạn** là số giờ tối đa được phép. Ví dụ, giới hạn tháng có thể là 40 giờ. Hãy kiểm tra giới hạn trên **tổng số giờ**, không chỉ trên từng đơn.`},{type:"example",title:"Worked example: Nam’s pay",text:`Tuesday is a normal day. Pay = 2 × 60,000 × 150% = 180,000 VND. The same 2 hours on a public holiday: 2 × 60,000 × 300% = 360,000 VND.
VI: Thứ Ba là ngày thường. Tiền = 2 × 60.000 × 150% = 180.000đ. Cùng 2 giờ đó vào ngày lễ: 2 × 60.000 × 300% = 360.000đ.`},{type:"exercise",title:`Pay two kinds of OT
VI: Tính tiền hai loại làm thêm`,task:`The hourly rate is 70,000 VND. A worker has 3 approved hours on a normal day, at 150%. The same worker has 2 approved hours on a public holiday, at 300%. What is the total OT pay?
VI: Lương giờ là 70.000đ. Một công nhân có 3 giờ làm thêm đã duyệt vào ngày thường, hệ số 150%. Cùng người đó có 2 giờ đã duyệt vào ngày lễ, hệ số 300%. Tổng tiền làm thêm là bao nhiêu?`,hint:`Pay each day type on its own. Then add the two amounts.
VI: Tính tiền riêng cho từng loại ngày. Sau đó cộng hai số tiền lại.`,solution:`Normal day: 3 × 70,000 × 150% = 315,000 VND. Holiday: 2 × 70,000 × 300% = 420,000 VND. Total: 735,000 VND.
VI: Ngày thường: 3 × 70.000 × 150% = 315.000đ. Ngày lễ: 2 × 70.000 × 300% = 420.000đ. Tổng: 735.000đ.`},{type:"text",text:`Common mistake: pay by punches, not by approval. If Nam stays 3.5 hours, pay the 2 approved hours. Show the other 1.5 hours to the manager.
VI: Lỗi thường gặp: trả theo dữ liệu chấm công thay vì theo phiếu duyệt. Nếu Nam ở lại 3,5 giờ, hãy trả 2 giờ đã duyệt và báo 1,5 giờ còn lại cho quản lý.`}],remember:`OT pay = approved hours × hourly rate × day-type rate. Rates and caps live in data, not code.
VI: Tiền làm thêm = giờ được duyệt × lương giờ × hệ số loại ngày. Hệ số và giới hạn để trong dữ liệu, không viết cứng trong code.`,questions:[{id:"hr-payroll.overtime.1",kind:"mcq",difficulty:"easy",prompt:`Hourly rate 50,000 VND. An employee works 4 approved hours on a public holiday. Use the example rate of 300%. What is the OT pay?
VI: Lương giờ 50.000 đồng. Nhân viên làm 4 giờ đã duyệt vào ngày lễ. Dùng hệ số ví dụ 300%. Tiền làm thêm là bao nhiêu?`,choices:["200,000 VND","300,000 VND","400,000 VND","600,000 VND"],answer:3,why:`4 × 50,000 × 300% = 600,000 VND. 400,000 would be the 200% weekly day-off rate.
VI: 4 × 50.000 × 300% = 600.000 đồng. 400.000 là kết quả của hệ số 200% ngày nghỉ hằng tuần.`},{id:"hr-payroll.overtime.2",kind:"scenario",difficulty:"medium",prompt:`Policy: only approved OT is paid. The manager approved 2 hours. Punches show 3.5 hours. What should payroll use?
VI: Quy định: chỉ trả giờ làm thêm đã duyệt. Quản lý duyệt 2 giờ. Dữ liệu chấm công cho thấy 3,5 giờ. Bảng lương nên dùng số nào?`,choices:["3.5 hours, because punches are the truth","2 hours, and flag 1.5 hours for review","0 hours, because the numbers do not match","2.75 hours, the average of both values"],answer:1,why:`The policy pays approved hours. The extra 1.5 hours is still shown, so the manager can approve more or ask why.
VI: Quy định trả theo giờ được duyệt. Phần 1,5 giờ dư vẫn được hiển thị để quản lý duyệt thêm hoặc hỏi lý do.`},{id:"hr-payroll.overtime.3",kind:"debug",difficulty:"hard",prompt:`A public holiday fell on a Sunday. OT for that day was paid at 200%, not 300%. Look at the code. What is wrong?
VI: Một ngày lễ rơi vào Chủ nhật. Tiền làm thêm hôm đó tính 200% chứ không phải 300%. Xem code, lỗi ở đâu?`,code:{lang:"csharp",text:`if (cal.IsWeeklyOff(d))
    return DayType.WeeklyOff;
if (cal.IsPublicHoliday(d))
    return DayType.Holiday;
return DayType.Normal;`},choices:["The holiday check must come first","Sunday should never be a weekly day off","DayType needs a fourth value for Sunday","The calendar is missing the holiday date"],answer:0,why:`The weekly-off check returns before the holiday check runs. Put the highest rate rule first. Also ask HR how they want this case paid.
VI: Điều kiện ngày nghỉ hằng tuần trả về trước khi kiểm tra ngày lễ. Hãy đặt quy tắc có hệ số cao nhất lên trước. Cũng nên hỏi HR muốn trả trường hợp này thế nào.`},{id:"hr-payroll.overtime.4",kind:"scenario",difficulty:"medium",prompt:`The monthly OT cap is 40 hours (example). Each request is under 8 hours, but one worker reached 52 hours this month. What is missing?
VI: Giới hạn làm thêm là 40 giờ mỗi tháng (ví dụ). Mỗi đơn đều dưới 8 giờ, nhưng một công nhân đã đạt 52 giờ tháng này. Thiếu kiểm tra gì?`,choices:["A check on the size of each request","A check on the month total before approval","A rule to block OT on weekly days off","A check that the worker has punched in"],answer:1,why:`Caps are about the total. Before approving, add the new hours to the approved hours of the month and the year.
VI: Giới hạn tính trên tổng số giờ. Trước khi duyệt, hãy cộng giờ mới với số giờ đã duyệt trong tháng và trong năm.`}]},{id:"hr-payroll.gross-net",title:"From gross to net · Từ lương gross đến lương net",summary:`Gross pay, allowances, insurance, income tax, and the net amount paid.
VI: Lương gộp, phụ cấp, bảo hiểm, thuế TNCN và số tiền thực nhận.`,minutes:6,level:"practical",blocks:[{type:"text",text:`In this lesson you learn how gross pay becomes net pay, one step at a time.
VI: Trong bài này, bạn học cách đi từ lương gross đến lương net, từng bước một.`},{type:"text",text:`**Gross** pay is the total before deductions: base salary plus allowances, OT and bonuses. **Net** pay is what the employee receives in the bank.
VI: Lương **gross** là tổng thu nhập trước khi khấu trừ: lương cơ bản cộng phụ cấp, làm thêm và thưởng. Lương **net** là số tiền nhân viên thực nhận qua ngân hàng.`},{type:"visual",svg:`<svg viewBox="0 0 360 176"><defs><marker id="hgr1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-box" x="6" y="10" width="100" height="56" rx="8"/><text class="v-muted v-small" x="56" y="32" text-anchor="middle">Gross pay</text><text class="v-title" x="56" y="54" text-anchor="middle">20,000,000</text>
<line class="v-line" x1="106" y1="38" x2="128" y2="38" marker-end="url(#hgr1)"/>
<rect class="v-warn" x="130" y="10" width="100" height="56" rx="8"/><text class="v-muted v-small" x="180" y="32" text-anchor="middle">Insurance</text><text class="v-title" x="180" y="54" text-anchor="middle">-1,890,000</text>
<line class="v-line" x1="230" y1="38" x2="252" y2="38" marker-end="url(#hgr1)"/>
<rect class="v-bad" x="254" y="10" width="100" height="56" rx="8"/><text class="v-muted v-small" x="304" y="32" text-anchor="middle">Income tax</text><text class="v-title" x="304" y="54" text-anchor="middle">-361,000</text>
<text class="v-muted v-small" x="10" y="94">Where 20,000,000 VND goes</text>
<rect class="v-good" x="10" y="102" width="302" height="36" rx="4"/><rect class="v-warn" x="312" y="102" width="32" height="36" rx="2"/><rect class="v-bad" x="344" y="102" width="6" height="36" rx="2"/>
<text class="v-title" x="161" y="125" text-anchor="middle">Net 17,749,000</text>
<text class="v-small" x="350" y="156" text-anchor="end">Insurance and tax: 2,251,000</text>
</svg>`,alt:"Gross pay of 20,000,000 VND goes through two cuts. Insurance takes 1,890,000 VND and income tax takes 361,000 VND. The bar shows net pay of 17,749,000 VND as most of the gross.",caption:`Most of gross stays as net. Insurance and tax are the two cuts.
VI: Phần lớn gross thành net. Bảo hiểm và thuế là hai khoản bị trừ.`},{type:"text",text:`Story: Tuan is a barista at a coffee chain. His base salary is 18,000,000 VND. He gets a 2,000,000 VND lunch allowance. In this example, it is tax-free. His gross pay is 20,000,000 VND.
VI: Câu chuyện: Tuấn là nhân viên pha chế ở một chuỗi cà phê. Lương cơ bản 18.000.000đ. Anh có phụ cấp ăn trưa 2.000.000đ. Trong ví dụ này, khoản này không chịu thuế. Gross là 20.000.000đ.
Step 1: insurance on the base salary. Step 2: taxable income. Step 3: tax from the tax table. Step 4: net pay.
VI: Bước 1: bảo hiểm trên lương cơ bản. Bước 2: thu nhập tính thuế. Bước 3: thuế theo biểu thuế. Bước 4: lương net.`},{type:"diagram",text:`Gross pay
  − employee insurance (BHXH, BHYT, BHTN)
  − personal income tax (thuế TNCN)
  = Net pay (thực nhận)`},{type:"text",text:`The **insurance base** (mức lương đóng bảo hiểm) is the salary used for insurance. It is the base salary, not the lunch allowance. A **cap** (mức trần) limits this number.
VI: **Mức lương đóng bảo hiểm** là mức lương dùng để tính bảo hiểm. Đó là lương cơ bản, không gồm phụ cấp ăn trưa. **Mức trần** giới hạn số này.`},{type:"list",items:[`Insurance: BHXH (social insurance), BHYT (health) and BHTN (unemployment). Example rates: 8%, 1.5%, 1%. Check the current rates with your payroll rules.
VI: Bảo hiểm: BHXH (bảo hiểm xã hội), BHYT (y tế) và BHTN (thất nghiệp). Tỷ lệ ví dụ: 8%, 1,5%, 1%. Hãy kiểm tra tỷ lệ hiện hành theo quy định tính lương.`,`Rates and caps change over time. Store them with dates.
VI: Tỷ lệ và mức trần thay đổi theo thời gian. Hãy lưu chúng kèm ngày hiệu lực.`,`Allowances: some are taxable. Some are tax-free up to a limit. Store a flag for each type.
VI: Phụ cấp: có loại chịu thuế, có loại miễn thuế trong một hạn mức. Hãy lưu cờ cho từng loại.`,`Income tax: deduct insurance, a personal deduction, and a deduction for each **dependant**. A dependant is a family member the employee supports.
VI: Thuế TNCN: trừ bảo hiểm, giảm trừ bản thân và giảm trừ cho mỗi **người phụ thuộc** (người thân được nhân viên nuôi dưỡng).`]},{type:"text",text:`A **progressive table** (biểu thuế lũy tiến) has bands. Each band has its own rate. Higher income reaches higher bands.
VI: **Biểu thuế lũy tiến** có nhiều bậc. Mỗi bậc có tỷ lệ riêng. Thu nhập càng cao thì càng lên bậc cao hơn.`},{type:"visual",svg:`<svg viewBox="0 0 360 214">
<text class="v-title" x="10" y="20">Example tax table (VND)</text>
<text class="v-small" x="10" y="40">Taxable income: 6,110,000</text>
<rect class="v-soft" x="10" y="50" width="170" height="30" rx="4"/><text class="v-title" x="95" y="69" text-anchor="middle">5% band</text>
<rect class="v-accent" x="180" y="50" width="38" height="30" rx="4"/>
<text class="v-muted v-small" x="10" y="98">First 5,000,000 at 5%</text>
<text class="v-muted v-small" x="350" y="98" text-anchor="end">Next 1,110,000 at 10%</text>
<rect class="v-soft" x="10" y="118" width="108" height="60" rx="6"/><text class="v-small" x="64" y="141" text-anchor="middle">Band 1 tax</text><text class="v-title" x="64" y="164" text-anchor="middle">250,000</text>
<rect class="v-soft" x="126" y="118" width="108" height="60" rx="6"/><text class="v-small" x="180" y="141" text-anchor="middle">Band 2 tax</text><text class="v-title" x="180" y="164" text-anchor="middle">111,000</text>
<rect class="v-accent" x="242" y="118" width="108" height="60" rx="6"/><text class="v-small" x="296" y="141" text-anchor="middle">Total tax</text><text class="v-title" x="296" y="164" text-anchor="middle">361,000</text>
<text class="v-muted v-small" x="10" y="202">Each band has its own rate</text>
</svg>`,alt:"A bar of taxable income, 6,110,000 VND. The first 5,000,000 VND is taxed at 5 percent, which is 250,000 VND. The next 1,110,000 VND is taxed at 10 percent, which is 111,000 VND. The total tax is 361,000 VND.",caption:`Each band is taxed at its own rate. Only the part inside a band pays that rate.
VI: Mỗi bậc chịu thuế theo tỷ lệ riêng. Chỉ phần thu nhập nằm trong bậc mới chịu tỷ lệ đó.`},{type:"diagram",text:`EXAMPLE ONLY: made-up rules (VND)
Gross                       20,000,000
Lunch allowance (tax-free)  -2,000,000
Insurance (10.5% of 18,000,000) -1,890,000
Personal deduction (example)   -10,000,000
Taxable income                  6,110,000
Tax (example table)               361,000
Net = 20,000,000 - 1,890,000 - 361,000
    = 17,749,000`},{type:"example",title:"Why the flag matters",text:`If the lunch allowance is marked taxable by mistake, taxable income rises by 2,000,000 VND. Tax rises from 361,000 to 561,000 VND. Net pay falls by 200,000 VND.
VI: Nếu phụ cấp ăn trưa bị đánh dấu nhầm là chịu thuế, thu nhập tính thuế tăng thêm 2.000.000đ. Thuế tăng từ 361.000đ lên 561.000đ. Lương net giảm 200.000đ.`},{type:"code",code:{lang:"csharp",text:`var insBase = Math.Min(baseSalary, insCap);
var ins = insBase * insRate;   // from config
var taxable = gross - taxFreeAllowances - ins
    - personalDed - dependants * depDed;
var tax = taxable > 0 ? TaxTable(taxable) : 0;
var net = gross - ins - tax;`}},{type:"text",text:`The company also pays its own insurance share. That is a company cost. It is not taken from the employee’s net pay.
VI: Công ty cũng đóng phần bảo hiểm của mình. Đó là chi phí của công ty, không trừ vào lương thực nhận của nhân viên.`},{type:"example",title:"Worked example: Tuan’s tax",text:`Example table: 5% on the first 5,000,000 VND, and 10% on the next part. Taxable income is 6,110,000 VND. Tax = 250,000 + 111,000 = 361,000 VND. Net = 20,000,000 − 1,890,000 − 361,000 = 17,749,000 VND. The lunch money stays in net pay.
VI: Biểu thuế ví dụ: 5% cho 5.000.000đ đầu, và 10% cho phần tiếp theo. Thu nhập tính thuế là 6.110.000đ. Thuế = 250.000 + 111.000 = 361.000đ. Net = 20.000.000 − 1.890.000 − 361.000 = 17.749.000đ. Tiền ăn trưa vẫn nằm trong lương net.`},{type:"exercise",title:`Find insurance and net pay
VI: Tìm tiền bảo hiểm và lương net`,task:`Gross pay is 15,000,000 VND. The base salary for insurance is 12,000,000 VND. Employee insurance is 10.5% of that base (example rate). Income tax is 200,000 VND (given). What is the insurance amount, and what is the net pay?
VI: Lương gross là 15.000.000đ. Mức lương đóng bảo hiểm là 12.000.000đ. Bảo hiểm phần người lao động là 10,5% mức này (tỷ lệ ví dụ). Thuế TNCN là 200.000đ (cho sẵn). Tiền bảo hiểm là bao nhiêu, và lương net là bao nhiêu?`,hint:`Insurance uses the base, not gross. Net = gross minus insurance minus tax.
VI: Bảo hiểm tính trên lương đóng bảo hiểm, không tính trên gross. Net = gross trừ bảo hiểm, trừ thuế.`,solution:`Insurance: 12,000,000 × 10.5% = 1,260,000 VND. Net: 15,000,000 − 1,260,000 − 200,000 = 13,540,000 VND.
VI: Bảo hiểm: 12.000.000 × 10,5% = 1.260.000đ. Net: 15.000.000 − 1.260.000 − 200.000 = 13.540.000đ.`},{type:"text",text:`Common mistake: take insurance from the full gross. 10.5% of 20,000,000 VND is 2,100,000 VND, which is 210,000 VND too much. Insurance uses the insurance base, not the lunch allowance.
VI: Lỗi thường gặp: tính bảo hiểm trên toàn bộ gross. 10,5% của 20.000.000đ là 2.100.000đ, dư 210.000đ. Bảo hiểm tính trên mức lương đóng bảo hiểm, không tính phụ cấp ăn trưa.`}],remember:`Net = gross − employee insurance − income tax. Every rate, cap and deduction is dated config.
VI: Net = gross − bảo hiểm phần người lao động − thuế TNCN. Mọi tỷ lệ, mức trần và mức giảm trừ là cấu hình có ngày hiệu lực.`,questions:[{id:"hr-payroll.gross-net.1",kind:"mcq",difficulty:"easy",prompt:`Which formula gives the net pay?
VI: Công thức nào cho ra lương net?`,choices:["Gross − company insurance − tax","Gross − employee insurance − tax","Base salary + allowances − tax","Gross − all allowances − insurance"],answer:1,why:`The employee’s insurance share and income tax are taken from gross. The company share is a company cost, not a deduction.
VI: Phần bảo hiểm của người lao động và thuế TNCN được trừ từ lương gross. Phần của công ty là chi phí công ty, không trừ vào lương.`},{id:"hr-payroll.gross-net.2",kind:"debug",difficulty:"medium",prompt:`For a low-paid employee with two dependants, net pay is higher than gross. What is the most likely bug?
VI: Với một nhân viên lương thấp có hai người phụ thuộc, lương net lại cao hơn gross. Lỗi có khả năng nhất là gì?`,code:{lang:"csharp",text:`var taxable = gross - ins - deductions;
var tax = TaxTable(taxable);
var net = gross - ins - tax;`},choices:["Insurance is calculated twice","Negative taxable income gives a negative tax","Dependants should be added, not deducted","The tax table uses the wrong year"],answer:1,why:`Deductions can be larger than income. Then taxable is negative and the tax becomes a refund. Taxable income must not go below zero.
VI: Các khoản giảm trừ có thể lớn hơn thu nhập. Khi đó thu nhập tính thuế bị âm và thuế thành số âm. Thu nhập tính thuế không được nhỏ hơn 0.`},{id:"hr-payroll.gross-net.3",kind:"scenario",difficulty:"hard",prompt:`A director earns a very high salary. Her insurance deduction is far bigger than HR expected. What do you check first?
VI: Một giám đốc có lương rất cao. Số tiền bảo hiểm bị trừ lớn hơn nhiều so với HR dự kiến. Bạn kiểm tra gì trước?`,choices:["Whether the insurance salary cap is applied","Whether her dependants are registered","Whether the lunch allowance is taxable","Whether her bank account is correct"],answer:0,why:"Insurance is charged on a salary base that has a maximum. Without `Math.Min` against the cap, high salaries pay too much.\nVI: Bảo hiểm tính trên mức lương đóng có mức trần. Không giới hạn theo mức trần thì người lương cao bị trừ quá nhiều."},{id:"hr-payroll.gross-net.4",kind:"compare",difficulty:"medium",prompt:`The insurance rate changes from next January. Which design handles it best?
VI: Tỷ lệ bảo hiểm thay đổi từ tháng 1 năm sau. Thiết kế nào xử lý tốt nhất?`,choices:["A constant in code, changed in a new release","A rates table with ValidFrom, read by period","One setting row that HR edits on 1 January","Ask HR to fix the payslips by hand in Excel"],answer:1,why:`A dated table lets December use the old rate and January use the new one. Rerunning an old month still gives the old result.
VI: Bảng có ngày hiệu lực giúp tháng 12 dùng tỷ lệ cũ, tháng 1 dùng tỷ lệ mới. Tính lại tháng cũ vẫn ra kết quả cũ.`}]},{id:"hr-payroll.run",title:"Running payroll · Chạy bảng lương",summary:`Calculate, review, approve, lock, pay, and handle late changes.
VI: Tính, kiểm tra, duyệt, chốt, chi trả và xử lý thay đổi đến muộn.`,minutes:6,level:"practical",blocks:[{type:"text",text:`In this lesson you learn how a payroll run is checked, locked and paid.
VI: Trong bài này, bạn học cách kiểm tra, chốt và chi trả một bảng lương.`},{type:"text",text:`A **payroll run** (bảng lương) is one calculation for one period. A **payroll period** (kỳ lương) is usually one month.
VI: **Bảng lương** là một lần tính lương cho một kỳ. **Kỳ lương** thường là một tháng.
The data has a **cut-off date** (ngày chốt). Changes after it go to the next period.
VI: Dữ liệu có **ngày chốt**. Thay đổi sau ngày đó sẽ tính vào kỳ sau.
Once approved, a run is **locked** (chốt). Nobody can change it.
VI: Khi đã duyệt, bảng lương được **chốt**. Không ai được sửa nữa.`},{type:"visual",svg:`<svg viewBox="0 0 360 214"><defs><marker id="hrrun1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-box" x="4" y="12" width="64" height="38" rx="6"/><text class="v-small" x="36" y="35" text-anchor="middle">Calculate</text>
<line class="v-line" x1="68" y1="31" x2="100" y2="31" marker-end="url(#hrrun1)"/>
<rect class="v-box" x="100" y="12" width="64" height="38" rx="6"/><text class="v-small" x="132" y="35" text-anchor="middle">Approve</text>
<line class="v-line" x1="164" y1="31" x2="196" y2="31" marker-end="url(#hrrun1)"/>
<rect class="v-warn" x="196" y="12" width="64" height="38" rx="6"/><text class="v-title" x="228" y="35" text-anchor="middle">Lock</text>
<line class="v-line" x1="260" y1="31" x2="292" y2="31" marker-end="url(#hrrun1)"/>
<rect class="v-good" x="292" y="12" width="64" height="38" rx="6"/><text class="v-small" x="324" y="35" text-anchor="middle">Pay</text>
<rect class="v-accent" x="8" y="104" width="124" height="48" rx="8"/><text class="v-small" x="70" y="125" text-anchor="middle">Raise approved 10 May</text><text class="v-small" x="70" y="141" text-anchor="middle">valid from 1 April</text>
<rect class="v-box" x="196" y="78" width="156" height="34" rx="8"/><text class="v-small" x="274" y="99" text-anchor="middle">April: locked, no edit</text>
<rect class="v-good" x="196" y="122" width="156" height="80" rx="8"/><text class="v-title" x="274" y="142" text-anchor="middle">May run</text><text class="v-small" x="274" y="162" text-anchor="middle">Salary 18,000,000</text><text class="v-small" x="274" y="178" text-anchor="middle">+ retro 3,000,000</text><text class="v-title" x="274" y="196" text-anchor="middle">= 21,000,000 VND</text>
<line class="v-line" x1="132" y1="132" x2="196" y2="160" marker-end="url(#hrrun1)"/>
</svg>`,alt:"Top: a payroll run goes Calculate, Approve, Lock, Pay. Below: a late raise cannot change the locked April run. It goes into the May run, which pays 21,000,000 VND in total.",caption:`A locked run stays closed. Late changes go to the next run.
VI: Kỳ đã chốt thì đóng lại. Thay đổi đến muộn đi vào kỳ sau.`},{type:"text",text:`Story: Sunrise Clinic has 40 staff. The cut-off for April is 25 April. HR reviews the numbers on the 27th. The director approves on the 28th, and the run is locked.
VI: Câu chuyện: phòng khám Sunrise có 40 nhân viên. Ngày chốt dữ liệu tháng 4 là 25/4. HR kiểm tra số liệu ngày 27. Giám đốc duyệt ngày 28 và bảng lương được chốt.
On the 30th the **bank file** (a list of accounts and amounts for the bank) goes out. Staff are paid. A late raise, approved 10 May, goes to the May run.
VI: Ngày 30, **file chuyển khoản** (danh sách tài khoản và số tiền gửi ngân hàng) được gửi đi và nhân viên nhận lương. Khoản tăng lương duyệt ngày 10/5 đi vào kỳ tháng 5.`},{type:"diagram",text:`Draft ──► Calculated ──► Reviewed
                            │
                            ▼
                        Approved
                            │
                            ▼
 Paid ◄─── Bank file ◄─── Locked
 Locked = read-only. Any later change
 becomes an adjustment in a new period.`},{type:"text",text:`**Retro pay** (truy lĩnh) is extra money for a past period, paid late. Do not reopen the old run. Pay the difference in the current run.
VI: **Truy lĩnh** là khoản tiền của kỳ trước nhưng trả muộn. Đừng mở lại kỳ cũ. Hãy trả phần chênh lệch trong kỳ hiện tại.
An **off-cycle run** (kỳ chi bổ sung) is an extra pay run outside the normal date.
VI: **Kỳ chi bổ sung** (off-cycle run) là một lần trả lương thêm, ngoài ngày trả thường kỳ.`},{type:"visual",svg:`<svg viewBox="0 0 360 200">
<text class="v-title" x="10" y="20">What each run pays (VND)</text>
<text class="v-small" x="10" y="46">April run (locked)</text>
<rect class="v-box" x="10" y="52" width="243" height="28" rx="5"/><text class="v-title" x="131" y="71" text-anchor="middle">15,000,000</text>
<text class="v-small" x="10" y="106">May run</text>
<rect class="v-good" x="10" y="112" width="291" height="28" rx="5"/><text class="v-title" x="155" y="131" text-anchor="middle">18,000,000 salary</text>
<rect class="v-accent" x="301" y="112" width="49" height="28" rx="5"/>
<text class="v-small" x="10" y="160">Retro for April: 3,000,000</text>
<text class="v-title" x="10" y="186">May total: 21,000,000</text>
</svg>`,alt:"Two bars. The locked April run paid 15,000,000 VND. The May run pays 18,000,000 VND salary plus 3,000,000 VND retro, a total of 21,000,000 VND.",caption:`The locked month stays as paid. The difference goes into the next run.
VI: Tháng đã chốt giữ nguyên như đã trả. Phần chênh lệch đi vào kỳ sau.`},{type:"example",title:"A gap of 4 dong",text:`The payroll report says 812,450,000 VND. The bank file says 812,449,996 VND. One side rounded each line. The other side rounded only the total. Pick one rule and use it everywhere.
VI: Báo cáo lương ghi 812.450.000đ. File ngân hàng ghi 812.449.996đ. Một bên làm tròn từng dòng, bên kia chỉ làm tròn tổng. Hãy chọn một quy tắc và dùng ở mọi nơi.`},{type:"list",items:[`Rounding: VND has no decimals. Ask HR where and how to round.
VI: Tiền đồng không có số lẻ. Hỏi HR làm tròn ở đâu và thế nào.`,`Bank file: check its sum equals the payroll total before sending.
VI: File ngân hàng: kiểm tra tổng bằng tổng bảng lương trước khi gửi.`,`Bank file: staff without a bank account need another way to be paid.
VI: File ngân hàng: nhân viên chưa có tài khoản cần cách trả lương khác.`,`Payslips: each person sees only their own, by portal or protected email.
VI: Phiếu lương: mỗi người chỉ xem phiếu của mình, qua cổng riêng hoặc email có bảo vệ.`]},{type:"code",code:{lang:"sql",text:`-- Block changes to a locked period
UPDATE PayrollLine SET Amount = @amount
WHERE Id = @id
  AND RunId IN (SELECT Id FROM PayrollRun
                WHERE Status <> 'Locked');
-- 0 rows updated → tell the user why`}},{type:"example",title:"Worked example: Dung’s retro pay",text:`Dung’s salary goes from 15,000,000 to 18,000,000 VND, valid from 1 April. The May run pays 18,000,000 + 3,000,000 retro = 21,000,000 VND. The bank file total must still equal the payroll total.
VI: Lương của Dũng tăng từ 15.000.000đ lên 18.000.000đ, hiệu lực từ 1/4. Kỳ tháng 5 trả 18.000.000 + 3.000.000 truy lĩnh = 21.000.000đ. Tổng file ngân hàng vẫn phải bằng tổng bảng lương.`},{type:"exercise",title:`Pay a late amount
VI: Trả khoản tiền bị thiếu`,task:`April is locked and paid. Dung was paid 600,000 VND too little for April. The May run is still open. The May salary is 18,000,000 VND. Where do you add the 600,000 VND, and what is the May total?
VI: Tháng 4 đã chốt và đã trả. Dũng bị trả thiếu 600.000đ cho tháng 4. Bảng lương tháng 5 vẫn đang mở. Lương tháng 5 là 18.000.000đ. Bạn thêm 600.000đ vào đâu, và tổng tháng 5 là bao nhiêu?`,hint:`Do not reopen April. Add the difference as retro pay in the open run.
VI: Không mở lại tháng 4. Hãy thêm phần chênh lệch như truy lĩnh trong kỳ đang mở.`,solution:`Add a 600,000 VND retro line to the May run. May total: 18,000,000 + 600,000 = 18,600,000 VND. April stays as it was.
VI: Thêm dòng truy lĩnh 600.000đ vào bảng lương tháng 5. Tổng tháng 5: 18.000.000 + 600.000 = 18.600.000đ. Tháng 4 giữ nguyên.`},{type:"text",text:`Common mistake: unlock the April run to fix one number. The payslips, bank file and tax were already made from it. Add an adjustment in May instead.
VI: Lỗi thường gặp: mở khóa kỳ tháng 4 để sửa một con số. Phiếu lương, file ngân hàng và thuế đã được tạo từ kỳ đó. Hãy thêm khoản điều chỉnh ở kỳ tháng 5.`}],remember:`Once locked, a payroll run never changes. Fix late changes as adjustments in the next run.
VI: Bảng lương đã chốt thì không sửa nữa. Thay đổi đến muộn được xử lý bằng điều chỉnh ở kỳ sau.`,questions:[{id:"hr-payroll.run.1",kind:"mcq",difficulty:"easy",prompt:`Why lock a payroll run after it is approved?
VI: Tại sao phải chốt (khóa) bảng lương sau khi đã duyệt?`,choices:["To make the next calculation run faster","So paid amounts and payslips never change","So that HR can edit it without approval","To hide the salaries from the accountant"],answer:1,why:`The bank file, payslips, tax and accounting all use those numbers. If the run changes later, they no longer match.
VI: File ngân hàng, phiếu lương, thuế và kế toán đều dùng các con số đó. Nếu bảng lương bị sửa sau, các số liệu sẽ không còn khớp.`},{id:"hr-payroll.run.2",kind:"scenario",difficulty:"medium",prompt:`A raise was approved on 10 May, valid from 1 April. April payroll is already locked and paid. What should happen?
VI: Tăng lương được duyệt ngày 10/5, hiệu lực từ 1/4. Bảng lương tháng 4 đã chốt và đã trả. Nên xử lý thế nào?`,choices:["Unlock April, recalculate it, and pay again","Ignore April because it is already locked","Pay May at the new rate plus April retro","Pay the new rate from June, after approval"],answer:2,why:`The locked April run stays as it was. The May run pays the new salary and adds the April difference as retro pay.
VI: Kỳ tháng 4 đã chốt giữ nguyên. Kỳ tháng 5 trả lương mới và cộng thêm phần chênh lệch tháng 4 dưới dạng truy lĩnh.`},{id:"hr-payroll.run.3",kind:"debug",difficulty:"hard",prompt:`The bank file total is a few dong lower than the payroll report total. The employee list is the same. What is the most likely cause?
VI: Tổng file ngân hàng thấp hơn tổng báo cáo lương vài đồng. Danh sách nhân viên giống nhau. Nguyên nhân có khả năng nhất là gì?`,choices:["The bank charges a small fee per transfer","One person is missing from the bank file","The two use different rounding rules","Someone changed the run after locking"],answer:2,why:`Rounding each line and rounding only the total give slightly different sums. A missing person would cause a much bigger gap.
VI: Làm tròn từng dòng và chỉ làm tròn tổng cho ra kết quả hơi khác nhau. Nếu thiếu một người thì chênh lệch sẽ lớn hơn nhiều.`},{id:"hr-payroll.run.4",kind:"truefalse",difficulty:"medium",prompt:"HR finds an error after payroll is paid. The developer should run an `UPDATE` on the locked lines to fix it.\nVI: Nếu HR phát hiện sai sót sau khi đã trả lương, lập trình viên nên chạy `UPDATE` trên các dòng đã chốt để sửa.",choices:["True","False"],answer:1,why:`The money has already left the bank. Create an adjustment in the next run, or an extra off-cycle run, so the history stays true.
VI: Tiền đã được chuyển đi rồi. Hãy tạo khoản điều chỉnh ở kỳ sau, hoặc một kỳ chi bổ sung, để lịch sử vẫn đúng.`}]},{id:"hr-payroll.privacy",title:"Privacy and access · Bảo mật và phân quyền",summary:`Salary and ID numbers are sensitive. Limit who sees them, and log it.
VI: Lương và số giấy tờ tùy thân là dữ liệu nhạy cảm. Giới hạn người xem và ghi lại nhật ký.`,minutes:5,level:"expert",blocks:[{type:"text",text:`In this lesson you learn how to protect salary data and limit who can see it.
VI: Trong bài này, bạn học cách bảo vệ dữ liệu lương và giới hạn người được xem.`},{type:"text",text:`HR systems hold **sensitive personal data**: salary, bank account, ID card number, tax code, health and family details.
VI: Hệ thống nhân sự chứa **dữ liệu cá nhân nhạy cảm**: lương, tài khoản ngân hàng, số CCCD, mã số thuế, sức khỏe và thông tin gia đình.
A leak hurts real people and the company.
VI: Lộ dữ liệu gây hại cho người thật và cho công ty.`},{type:"visual",svg:`<svg viewBox="0 0 360 236"><defs><marker id="hp" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-box" x="6" y="40" width="94" height="34" rx="6"/><text class="v-small" x="53" y="61" text-anchor="middle">/payslips/1041</text><text class="v-muted v-small" x="53" y="90" text-anchor="middle">Lan, her own id</text>
<rect class="v-box" x="6" y="104" width="94" height="34" rx="6"/><text class="v-small" x="53" y="125" text-anchor="middle">/payslips/1042</text><text class="v-muted v-small" x="53" y="154" text-anchor="middle">Lan, edited id</text>
<rect class="v-accent" x="130" y="14" width="100" height="150" rx="8"/><text class="v-title" x="180" y="40" text-anchor="middle">Server check</text><text class="v-small" x="180" y="90" text-anchor="middle">Is this payslip</text><text class="v-small" x="180" y="108" text-anchor="middle">Lan’s own?</text>
<line class="v-line" x1="100" y1="57" x2="130" y2="57" marker-end="url(#hp)"/><line class="v-line" x1="100" y1="121" x2="130" y2="121" marker-end="url(#hp)"/>
<line class="v-line" x1="230" y1="57" x2="262" y2="57" marker-end="url(#hp)"/><line class="v-line" x1="230" y1="121" x2="262" y2="121" marker-end="url(#hp)"/>
<rect class="v-good" x="262" y="40" width="92" height="34" rx="6"/><text class="v-small" x="308" y="61" text-anchor="middle">Show payslip</text>
<rect class="v-bad" x="262" y="104" width="92" height="34" rx="6"/><text class="v-small" x="308" y="125" text-anchor="middle">403 Denied</text>
<line class="v-line" x1="180" y1="164" x2="180" y2="190" marker-end="url(#hp)"/>
<rect class="v-soft" x="10" y="190" width="340" height="36" rx="8"/><text class="v-title" x="180" y="213" text-anchor="middle">Audit log: who, what, when</text>
</svg>`,alt:"Lan requests her own payslip 1041 and the server check allows it. She edits the id to 1042, and the same check answers 403 Denied. Every request goes to an audit log.",caption:`The server checks every request and logs it, even the blocked ones.
VI: Máy chủ kiểm tra mọi yêu cầu và ghi nhật ký, kể cả yêu cầu bị chặn.`},{type:"example",title:"The changed URL",text:"An employee opens `/payslips/1041`, her own payslip. She types `1042` and sees a colleague’s salary. The menu was protected. But the API (the server code that sends data to the app) did not check ownership.\nVI: Một nhân viên mở `/payslips/1041`, phiếu lương của chính cô. Cô gõ `1042` và thấy lương của đồng nghiệp. Menu đã được phân quyền, nhưng API (phần mã phía máy chủ gửi dữ liệu cho ứng dụng) không kiểm tra chủ sở hữu."},{type:"text",text:`Story: Phuong is a payroll clerk at a school with 120 staff. She needs salary data. Teacher Lan needs only her own payslip. The maths head sees leave for 8 teachers.
VI: Câu chuyện: Phượng là kế toán lương ở một trường có 120 nhân viên. Cô cần xem dữ liệu lương. Giáo viên Lan chỉ cần phiếu lương của mình. Tổ trưởng Toán xem nghỉ phép của 8 giáo viên.
So each person gets a role and a scope. The server checks both on every request.
VI: Vì vậy mỗi người có một vai trò và một phạm vi. Máy chủ kiểm tra cả hai ở mọi yêu cầu.`},{type:"text",text:`**Role-based access** means rights come from the user’s role. A **scope** is the set of records one user may see, such as one team. For example, a manager sees only their own team.
VI: **Phân quyền theo vai trò** nghĩa là quyền dựa trên vai trò của người dùng. **Phạm vi** là tập dữ liệu mà một người được xem, ví dụ một nhóm. Ví dụ quản lý chỉ thấy nhóm của mình.`},{type:"diagram",text:`Who sees what (example policy)
Data          Self  Manager HR  Payroll
───────────── ────  ─────── ─── ───────
Own payslip   Yes   No      Yes Yes
Team leave    -     Team    Yes No
Team salary   -     No      Yes Yes
Bank account  Own   No      Yes Yes`},{type:"list",items:[`Audit log: who viewed or changed salary data, when, and the old and new value.
VI: Nhật ký truy cập: ai đã xem hoặc sửa dữ liệu lương, lúc nào, và giá trị cũ, mới.`,`Check ownership on the server for every request, not only in the menu.
VI: Kiểm tra quyền sở hữu trên máy chủ với mọi yêu cầu, không chỉ trên menu.`,`Exports to Excel are a common leak: limit them and log them.
VI: Xuất ra Excel thường gây lộ dữ liệu: hãy giới hạn và ghi nhật ký.`,`Test and dev databases: mask names, salary, bank and ID numbers first.
VI: Database test và dev: che tên, lương, số tài khoản và số CCCD trước.`]},{type:"text",text:`Test data is a common leak. Mask the real data before it leaves production. **Masking** (che dữ liệu) replaces names, IDs and salaries with fake values.
VI: Dữ liệu test thường là nguồn lộ thông tin. Hãy che dữ liệu thật trước khi nó rời production. **Che dữ liệu** (masking) là thay tên, số giấy tờ và lương bằng giá trị giả.`},{type:"visual",svg:`<svg viewBox="0 0 360 200"><defs><marker id="hrpriv2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<text class="v-bad-text v-title" x="10" y="20">Wrong: copy, then mask</text>
<rect class="v-box" x="6" y="30" width="100" height="36" rx="6"/><text class="v-small" x="56" y="53" text-anchor="middle">Production</text>
<line class="v-line" x1="106" y1="48" x2="128" y2="48" marker-end="url(#hrpriv2)"/>
<rect class="v-bad" x="130" y="30" width="100" height="36" rx="6"/><text class="v-small" x="180" y="53" text-anchor="middle">Copy to test</text>
<line class="v-line" x1="230" y1="48" x2="252" y2="48" marker-end="url(#hrpriv2)"/>
<rect class="v-box" x="254" y="30" width="100" height="36" rx="6"/><text class="v-small" x="304" y="53" text-anchor="middle">Mask in test</text>
<text class="v-bad-text v-small" x="180" y="86" text-anchor="middle">Real salaries sit in test</text>
<text class="v-good-text v-title" x="10" y="120">Right: mask, then copy</text>
<rect class="v-box" x="6" y="130" width="100" height="36" rx="6"/><text class="v-small" x="56" y="153" text-anchor="middle">Production</text>
<line class="v-line" x1="106" y1="148" x2="128" y2="148" marker-end="url(#hrpriv2)"/>
<rect class="v-good" x="130" y="130" width="100" height="36" rx="6"/><text class="v-small" x="180" y="153" text-anchor="middle">Mask on export</text>
<line class="v-line" x1="230" y1="148" x2="252" y2="148" marker-end="url(#hrpriv2)"/>
<rect class="v-good" x="254" y="130" width="100" height="36" rx="6"/><text class="v-small" x="304" y="153" text-anchor="middle">Test server</text>
<text class="v-good-text v-small" x="180" y="186" text-anchor="middle">Only masked data is copied</text>
</svg>`,alt:"Two rows of three boxes. The wrong row copies production to test first, so real salaries sit in test. The right row masks the data during export, so only masked data is copied.",caption:`Mask before the copy. Then real salaries never reach the test server.
VI: Che dữ liệu trước khi sao chép. Như vậy lương thật không bao giờ đến máy chủ test.`},{type:"code",code:{lang:"sql",text:`-- Run on the TEST copy, never on prod
UPDATE Employee SET
  FullName    = CONCAT('Employee ', Id),
  IdNumber    = RIGHT('000000000000'
                + CAST(Id AS varchar), 12),
  BankAccount = NULL;
UPDATE SalaryHistory
  SET Amount = 10000000;`}},{type:"text",text:`Vietnam has laws on personal data protection. Ask the legal team which rules apply. For example, **consent** (sự đồng ý) and **breach reporting** (báo cáo khi lộ dữ liệu).
VI: Việt Nam có luật bảo vệ dữ liệu cá nhân. Hãy hỏi bộ phận pháp chế quy định nào áp dụng. Ví dụ sự đồng ý của người lao động và báo cáo khi lộ dữ liệu.`},{type:"example",title:"Worked example: the audit log",text:`Log row: 12 June, 09:14, Phuong, viewed payslip 1042. At 09:20 she exports 120 salaries to Excel. The log stores the export and the count, 120.
VI: Dòng nhật ký: 12/6, 09:14, Phượng, xem phiếu lương 1042. Lúc 09:20 cô xuất 120 mức lương ra Excel. Nhật ký ghi lần xuất và số dòng, 120.`},{type:"exercise",title:`Write the server checks
VI: Viết các kiểm tra của máy chủ`,task:`User 1041 asks the server for payslip 1042. Write the checks the server must make before it sends the data. Use no more than three steps.
VI: Người dùng 1041 yêu cầu máy chủ lấy phiếu lương 1042. Hãy viết các kiểm tra mà máy chủ phải làm trước khi gửi dữ liệu. Không quá ba bước.`,hint:`Check who is logged in, who owns the payslip, and whether the role allows it.
VI: Kiểm tra ai đang đăng nhập, ai là chủ phiếu lương, và vai trò có được phép xem không.`,solution:`1. The user is logged in. 2. Payslip 1042 belongs to user 1041, or the user has a role that allows it. 3. If not, return 403 and write the attempt to the audit log.
VI: 1. Người dùng đã đăng nhập. 2. Phiếu lương 1042 thuộc về người dùng 1041, hoặc người dùng có vai trò được phép xem. 3. Nếu không, trả về 403 và ghi lần thử vào nhật ký truy cập.`},{type:"text",text:`Common mistake: copy production to test first and mask later. For one hour, 120 real salaries sit on a weaker server. Mask the data before it leaves production.
VI: Lỗi thường gặp: sao chép production sang test trước rồi mới che dữ liệu. Trong một giờ, 120 mức lương thật nằm trên máy chủ yếu hơn. Hãy che dữ liệu trước khi nó rời production.`}],remember:`Show salary data only to people who need it, check it on the server, and log every access.
VI: Chỉ cho người cần thiết xem dữ liệu lương, kiểm tra quyền ở máy chủ và ghi nhật ký mọi lần truy cập.`,questions:[{id:"hr-payroll.privacy.1",kind:"mcq",difficulty:"easy",prompt:`In a common policy, what should a team manager see about their team?
VI: Theo chính sách thường gặp, quản lý nhóm nên được xem gì về nhóm mình?`,choices:["Everything HR sees, including bank accounts","Leave and attendance, but not salaries","Salaries of all teams, to compare them","Nothing at all, only HR may see data"],answer:1,why:`Managers approve leave and check attendance, so they need that data. Salary and bank data stay with HR and payroll unless policy says otherwise.
VI: Quản lý duyệt nghỉ phép và theo dõi chấm công nên cần dữ liệu đó. Lương và tài khoản ngân hàng chỉ HR và bộ phận lương được xem, trừ khi chính sách khác đi.`},{id:"hr-payroll.privacy.2",kind:"debug",difficulty:"medium",prompt:"Users cannot see other people’s payslips in the menu. But changing the id in `/api/payslips/1042` shows any payslip. What is missing?\nVI: Người dùng không thấy phiếu lương của người khác trên menu. Nhưng đổi id trong `/api/payslips/1042` thì xem được bất kỳ phiếu nào. Thiếu gì?",choices:["HTTPS on the payslip page","An ownership check in the API","A longer session timeout","A bigger random number for ids"],answer:1,why:`The server must check that the payslip belongs to the user. Or the user needs a role that allows it. Hiding a menu is not security.
VI: Máy chủ phải kiểm tra phiếu lương thuộc về người dùng, hoặc người dùng có vai trò được phép xem. Ẩn menu không phải là bảo mật.`},{id:"hr-payroll.privacy.3",kind:"scenario",difficulty:"medium",prompt:`A tester needs real-looking payroll data to test a bug. What is the safest way?
VI: Tester cần dữ liệu lương giống thật để kiểm thử một lỗi. Cách an toàn nhất là gì?`,choices:["Give the tester read access to production","Copy production to test, then mask it there","Mask the data first, then copy it to test","Email the tester an Excel export of salaries"],answer:2,why:`Mask before the data leaves production control. If you copy first, real salaries sit in a less protected place, even for a short time.
VI: Hãy che dữ liệu trước khi nó rời khỏi môi trường production. Nếu sao chép trước, lương thật sẽ nằm ở nơi kém bảo vệ hơn, dù chỉ một lúc.`},{id:"hr-payroll.privacy.4",kind:"truefalse",difficulty:"hard",prompt:`For salary data, the audit log should record only changes. Recording who viewed the data is not useful.
VI: Với dữ liệu lương, nhật ký chỉ cần ghi các lần sửa. Ghi lại ai đã xem dữ liệu là không có ích.`,choices:["True","False"],answer:1,why:`A leak usually comes from someone who only viewed or exported data. A view log helps find who saw it.
VI: Lộ dữ liệu thường đến từ người chỉ xem hoặc xuất dữ liệu. Nhật ký lượt xem giúp tìm ra ai đã thấy dữ liệu đó.`}]}],cheatSheet:[{title:"Records and time · Hồ sơ và thời gian",items:[{term:"Employee master · Hồ sơ nhân viên",meaning:`One row per person: code, name, ID, bank account.
VI: Một dòng cho mỗi người: mã, họ tên, số CCCD, tài khoản ngân hàng.`},{term:"Effective date · Ngày hiệu lực",meaning:`Rows with ValidFrom and ValidTo, so past months stay correct.
VI: Các dòng có ngày hiệu lực từ và đến, để các tháng cũ vẫn đúng.`},{term:"Raw punch · Lượt chấm công gốc",meaning:`One scan on the time clock: who, device, time.
VI: Một lần quét trên máy chấm công: ai, máy nào, mấy giờ.`},{term:"Shift · Ca làm việc",meaning:`Planned start and end. A night shift belongs to its start date.
VI: Giờ bắt đầu và kết thúc theo kế hoạch. Ca đêm tính cho ngày bắt đầu ca.`},{term:"Timesheet · Bảng chấm công",meaning:`Calculated result per day: OK, late, missing punch.
VI: Kết quả tính theo từng ngày: đủ công, đi muộn, thiếu lượt chấm.`}]},{title:"Leave and overtime · Nghỉ phép và làm thêm",items:[{term:"Leave balance · Quỹ phép",meaning:`Days left, built from a ledger of plus and minus lines.
VI: Số ngày phép còn lại, tính từ sổ ghi các dòng cộng và trừ.`},{term:"Accrual · Cộng dồn phép",meaning:`Leave earned over time, for example 1 day each month.
VI: Phép được cộng dần theo thời gian, ví dụ 1 ngày mỗi tháng.`},{term:"Carry-over · Phép tồn chuyển sang",meaning:`Unused days moved to next year, often with an end date.
VI: Phép chưa dùng chuyển sang năm sau, thường có hạn sử dụng.`},{term:"Overtime · Làm thêm giờ",meaning:`Approved work outside the schedule, paid at a day-type rate.
VI: Giờ làm ngoài lịch đã được duyệt, trả theo hệ số của loại ngày.`},{term:"OT cap · Giới hạn làm thêm",meaning:`Maximum OT hours per day, month and year. Check the total.
VI: Số giờ làm thêm tối đa theo ngày, tháng và năm. Kiểm tra trên tổng số giờ.`}]},{title:"Pay calculation · Tính lương",items:[{term:"Gross · Lương gross",meaning:`Total pay before any deduction.
VI: Tổng thu nhập trước mọi khoản khấu trừ.`},{term:"Net · Lương net",meaning:`What the employee receives: gross minus insurance and tax.
VI: Số tiền nhân viên thực nhận: gross trừ bảo hiểm và thuế.`},{term:"BHXH, BHYT, BHTN",meaning:`Social, health and unemployment insurance. Rates and caps change.
VI: Bảo hiểm xã hội, y tế và thất nghiệp. Tỷ lệ và mức trần có thể thay đổi.`},{term:"Thuế TNCN · Income tax",meaning:`Personal income tax after insurance and family deductions.
VI: Thuế thu nhập cá nhân, tính sau khi trừ bảo hiểm và giảm trừ gia cảnh.`},{term:"Tax-free allowance · Phụ cấp không chịu thuế",meaning:`Allowance not taxed, often only up to a limit.
VI: Phụ cấp không tính thuế, thường chỉ trong một hạn mức.`}]},{title:"Payroll run and privacy · Chạy lương và bảo mật",items:[{term:"Cut-off · Ngày chốt",meaning:`Last date for data in this period. Later changes go to the next one.
VI: Ngày cuối nhận dữ liệu cho kỳ này. Thay đổi sau đó tính vào kỳ sau.`},{term:"Lock · Chốt bảng lương",meaning:`Approved run becomes read-only before payment.
VI: Bảng lương đã duyệt chuyển sang chỉ đọc trước khi chi trả.`},{term:"Retro pay · Truy lĩnh",meaning:`Difference for a past period, paid in the current run.
VI: Phần chênh lệch của kỳ trước, được trả trong kỳ hiện tại.`},{term:"Bank file · File chuyển khoản",meaning:`List of accounts and amounts. Its sum must match payroll.
VI: Danh sách tài khoản và số tiền. Tổng phải khớp với bảng lương.`},{term:"Audit log · Nhật ký truy cập",meaning:`Who viewed or changed sensitive data, and when.
VI: Ai đã xem hoặc sửa dữ liệu nhạy cảm, và vào lúc nào.`},{term:"Masking · Che dữ liệu",meaning:`Replace real names, salary and IDs before data goes to test.
VI: Thay tên, lương và số giấy tờ thật trước khi đưa dữ liệu sang môi trường test.`}]}],assessment:[{id:"hr-payroll.assess.1",kind:"scenario",difficulty:"medium",prompt:`Lan’s salary rises from 18,000,000 to 20,000,000 VND on 1 July. HR wants the June and July payslips to stay correct. What should HR do?
VI: Lương của Lan tăng từ 18.000.000đ lên 20.000.000đ vào ngày 1/7. HR muốn phiếu lương tháng 6 và tháng 7 đều đúng. HR nên làm gì?`,choices:["Overwrite the salary with 20,000,000 VND","Close the old row on 30 June and add a new row","Delete the old row and keep only the new salary","Keep both rows open, with no end date"],answer:1,why:`Each row has its own dates. The June run uses the old row, and the July run uses the new one. Overwriting would change the June pay.
VI: Mỗi dòng có ngày hiệu lực riêng. Bảng lương tháng 6 dùng dòng cũ, tháng 7 dùng dòng mới. Ghi đè sẽ làm đổi số tiền tháng 6.`},{id:"hr-payroll.assess.2",kind:"mcq",difficulty:"easy",prompt:`Mai has 3.5 days of leave. Her request for 3 days is approved. Later, the request is cancelled. What is her balance now?
VI: Mai còn 3,5 ngày phép. Đơn xin 3 ngày được duyệt. Sau đó đơn bị hủy. Quỹ phép của Mai bây giờ là bao nhiêu?`,choices:["0.5 days","3.5 days","6.5 days","3.0 days"],answer:1,why:`Approval took 3.0 days out, so 0.5 was left. The cancel adds 3.0 back, so the balance is 3.5 again.
VI: Duyệt đơn trừ 3,0 ngày, còn 0,5. Hủy đơn cộng lại 3,0 ngày, nên quỹ phép lại là 3,5.`},{id:"hr-payroll.assess.3",kind:"code",difficulty:"hard",prompt:`An approved leave is from 12 to 14 June. A new request is from 9 to 11 June. Does the overlap check flag it?
VI: Đơn nghỉ đã duyệt từ 12 đến 14/6. Đơn mới xin từ 9 đến 11/6. Câu kiểm tra trùng có phát hiện không?`,code:{lang:"sql",text:`-- existing: FromDate 06-12, ToDate 06-14
-- new:      @from 06-09,    @to 06-11
AND FromDate <= @to
AND ToDate   >= @from`},choices:["Yes, both requests are in June","No, the new request ends before the old one starts","Yes, the query compares only the month numbers","No, the query does not check the dates at all"],answer:1,why:`12 <= 11 is false, so the first condition fails and no overlap is found. The new request ends on 11 June, before the old one starts on 12 June.
VI: 12 <= 11 là sai, nên điều kiện đầu không đúng và không có trùng. Đơn mới kết thúc ngày 11/6, trước khi đơn cũ bắt đầu ngày 12/6.`},{id:"hr-payroll.assess.4",kind:"debug",difficulty:"medium",prompt:`A night shift starts at 22:00. A worker scans IN at 21:45, but the system says the IN is missing. The shift window opens at 22:00. What is the most likely fix?
VI: Ca đêm bắt đầu lúc 22:00. Một công nhân quét vào lúc 21:45, nhưng hệ thống báo thiếu giờ vào. Khung giờ của ca mở lúc 22:00. Cách sửa có khả năng nhất là gì?`,choices:["Open the shift window 2 hours early, at 20:00","Ask the worker to scan again the next morning","Move every shift start to 21:00 for all staff","Turn off the late rule for night shifts"],answer:0,why:`A scan before the start must fall inside the window. A window that opens 2 hours early catches the 21:45 scan, so it matches the night shift.
VI: Lượt quẹt trước giờ bắt đầu phải nằm trong khung giờ. Khung giờ mở sớm 2 giờ sẽ bắt được lượt quẹt 21:45, nên lượt này khớp với ca đêm.`},{id:"hr-payroll.assess.5",kind:"mcq",difficulty:"easy",prompt:`Hourly rate 80,000 VND. An employee has 3 approved hours on a weekly day off, at 200%. What is the overtime pay?
VI: Lương giờ 80.000đ. Nhân viên có 3 giờ làm thêm đã duyệt vào ngày nghỉ hằng tuần, hệ số 200%. Tiền làm thêm là bao nhiêu?`,choices:["240,000 VND","360,000 VND","480,000 VND","720,000 VND"],answer:2,why:`3 × 80,000 × 200% = 480,000 VND. The other amounts use 100%, 150% and 300%, so check the day type first.
VI: 3 × 80.000 × 200% = 480.000đ. Các số khác dùng hệ số 100%, 150% và 300%, nên hãy kiểm tra loại ngày trước.`},{id:"hr-payroll.assess.6",kind:"scenario",difficulty:"hard",prompt:`The monthly OT cap is 40 hours (example). The manager has approved 35 hours this month. A new request is for 8 hours. What should the system do?
VI: Giới hạn làm thêm mỗi tháng là 40 giờ (ví dụ). Quản lý đã duyệt 35 giờ trong tháng này. Đơn mới xin 8 giờ. Hệ thống nên làm gì?`,choices:["Approve only 5 hours, so the total is 40","Approve all 8 hours, because each single request is small","Reject all 8 hours, because the month is already almost full","Approve all 8 hours and check the cap next month"],answer:0,why:`Caps count the total. 35 + 8 = 43 is over 40, so only 5 hours fit. The other 3 hours need a decision under your policy.
VI: Giới hạn tính trên tổng số giờ. 35 + 8 = 43 vượt quá 40, nên chỉ 5 giờ nằm trong giới hạn. 3 giờ còn lại cần quyết định theo quy định của công ty.`},{id:"hr-payroll.assess.7",kind:"mcq",difficulty:"medium",prompt:`Gross pay is 25,000,000 VND. Employee insurance is 2,100,000 VND. Income tax is 500,000 VND. What is the net pay?
VI: Lương gross là 25.000.000đ. Bảo hiểm phần người lao động là 2.100.000đ. Thuế TNCN là 500.000đ. Lương net là bao nhiêu?`,choices:["22,400,000 VND","22,900,000 VND","20,400,000 VND","23,000,000 VND"],answer:0,why:`Net = gross − insurance − tax = 25,000,000 − 2,100,000 − 500,000 = 22,400,000 VND. Forgetting the tax gives 22,900,000 VND.
VI: Net = gross − bảo hiểm − thuế = 25.000.000 − 2.100.000 − 500.000 = 22.400.000đ. Quên trừ thuế sẽ ra 22.900.000đ.`},{id:"hr-payroll.assess.8",kind:"debug",difficulty:"hard",prompt:`A payslip shows employee insurance of 2,100,000 VND. Gross pay is 20,000,000 VND. The base salary is 18,000,000 VND and the rate is 10.5%. What is the most likely cause?
VI: Phiếu lương ghi bảo hiểm người lao động là 2.100.000đ. Gross là 20.000.000đ. Lương cơ bản là 18.000.000đ và tỷ lệ là 10,5%. Nguyên nhân có khả năng nhất là gì?`,choices:["Insurance used gross (20,000,000), not the base","The rate was typed as 11.7% by mistake","The company share was added to the employee share","Income tax was taken before insurance"],answer:0,why:`10.5% of 20,000,000 is 2,100,000. The right base is 18,000,000, so the right amount is 1,890,000. The lunch allowance is not in the insurance base.
VI: 10,5% của 20.000.000 là 2.100.000đ. Mức lương đóng bảo hiểm đúng là 18.000.000đ, nên số tiền đúng là 1.890.000đ. Phụ cấp ăn trưa không nằm trong mức lương đóng bảo hiểm.`},{id:"hr-payroll.assess.9",kind:"scenario",difficulty:"medium",prompt:`The April payroll is locked and paid. One staff member was paid 500,000 VND too little. The May run is still open. What is the right fix?
VI: Bảng lương tháng 4 đã chốt và đã trả. Một nhân viên bị trả thiếu 500.000đ. Bảng lương tháng 5 vẫn đang mở. Cách sửa đúng là gì?`,choices:["Unlock April, edit the amount, and send a new bank file","Add a 500,000 VND adjustment line in the May run","Change the April payslip only, not the payroll","Ignore it, because 500,000 VND is a small amount"],answer:1,why:`The locked April run cannot change, and the money has already gone out. The fix is an adjustment in the next open run, so the history stays true.
VI: Bảng lương tháng 4 đã chốt nên không được sửa, và tiền đã chuyển đi. Cách sửa là một khoản điều chỉnh trong kỳ mở tiếp theo, để lịch sử vẫn đúng.`},{id:"hr-payroll.assess.10",kind:"compare",difficulty:"medium",prompt:`A manager should see leave for the team, but not salaries. Which way is better to enforce this?
VI: Quản lý nên xem được nghỉ phép của nhóm, nhưng không xem được lương. Cách nào tốt hơn để thực hiện điều này?`,choices:["Hide the salary column in the menu only","Check the role and scope on the server for each request","Ask managers in a meeting not to open salary pages","Let managers see salaries, but ask them not to share"],answer:1,why:`Hiding a menu is not security. The server must check the role and scope on every request, so a changed URL cannot bypass it.
VI: Ẩn menu không phải là bảo mật. Máy chủ phải kiểm tra vai trò và phạm vi ở mọi yêu cầu, nên đổi URL cũng không vượt qua được.`}]},s=Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"})),o={id:"inventory",group:"domain",title:"Inventory & Goods",emoji:"📦",tagline:`Know what you have, where it is, and what it is worth.
VI: Biết mình có hàng gì, nằm ở đâu và đáng giá bao nhiêu.`,lessons:[{id:"inventory.items-units",title:"Items, SKUs and units of measure · Mã hàng, SKU và đơn vị tính",summary:`One item can come in many units. Store stock in one base unit.
VI: Một mặt hàng có thể nhập theo nhiều đơn vị. Hãy lưu tồn kho theo một đơn vị gốc.`,minutes:8,level:"basic",blocks:[{type:"text",text:`In this lesson you learn how to name and count goods correctly.
VI: Trong bài này, bạn học cách đặt mã và đếm hàng cho đúng.
Every shop and warehouse keeps a list of its goods. It covers everything it sells or stores. This list is the **item master** (danh mục hàng hóa).
VI: Mọi cửa hàng và kho đều có danh sách những thứ mình bán hoặc lưu giữ. Danh sách này gọi là **danh mục hàng hóa** (item master).
Each row has a code, a name and a unit. It also has a few settings, such as a barcode.
VI: Mỗi dòng có mã, tên, đơn vị tính và vài thiết lập khác, như mã vạch.
If the item master is messy, one product can get three names. Reports then count it three times, or miss it.
VI: Nếu danh mục lộn xộn, một sản phẩm có thể có ba tên. Báo cáo sẽ đếm nó ba lần, hoặc bỏ sót.`},{type:"text",text:`A **SKU** (stock keeping unit) is a code. It marks one thing you count on its own.
VI: **SKU** (stock keeping unit) là mã của một thứ được đếm tồn riêng.
A **variant** is a version of one product. For example, it can have a different size or color. Most shops give each variant its own SKU.
VI: **Biến thể** là một phiên bản của cùng sản phẩm, như khác size hoặc khác màu. Hầu hết cửa hàng cấp cho mỗi biến thể một SKU riêng.
Why does this matter? A red T-shirt in size M can sell out. Size L may still be full.
VI: Vì sao quan trọng? Áo đỏ size M có thể hết hàng trong khi size L vẫn còn đầy.`},{type:"visual",svg:`<svg viewBox="0 0 360 150"><defs><marker id="u1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-box" x="8" y="30" width="96" height="56" rx="8"/><text class="v-muted v-small" x="56" y="50" text-anchor="middle">Typed</text><text class="v-title" x="56" y="72" text-anchor="middle">5 CARTON</text>
<line class="v-line" x1="104" y1="58" x2="128" y2="58" marker-end="url(#u1)"/><text class="v-small" x="116" y="48" text-anchor="middle">× 24</text>
<rect class="v-good" x="132" y="30" width="96" height="56" rx="8"/><text class="v-muted v-small" x="180" y="50" text-anchor="middle">Saved</text><text class="v-title" x="180" y="72" text-anchor="middle">120 CAN</text>
<line class="v-line" x1="228" y1="58" x2="252" y2="58" marker-end="url(#u1)"/><text class="v-small" x="240" y="48" text-anchor="middle">÷ 24</text>
<rect class="v-box" x="256" y="30" width="96" height="56" rx="8"/><text class="v-muted v-small" x="304" y="50" text-anchor="middle">Screen</text><text class="v-title" x="304" y="72" text-anchor="middle">5 CARTON</text>
<text class="v-small" x="180" y="116" text-anchor="middle">Stock keeps the base unit.</text><text class="v-muted v-small" x="180" y="134" text-anchor="middle">Convert only at the edges.</text></svg>`,alt:"Three boxes in a row. 5 cartons typed on the receipt are multiplied by 24. They are saved as 120 cans. On screen they are divided by 24 again. The user sees 5 cartons.",caption:`Convert at the edges, store the base unit.
VI: Chỉ quy đổi ở đầu vào và đầu ra, lưu đơn vị gốc.`},{type:"diagram",text:`Product: T-shirt "Basic"
   │
   ├── SKU TS-RED-M   (red, size M)
   ├── SKU TS-RED-L   (red, size L)
   └── SKU TS-BLU-M   (blue, size M)

Stock is counted per SKU, not per product`},{type:"text",text:`A **unit of measure** (UoM, đơn vị tính) is how you count an item. Examples: piece, can, pack, carton or kilogram. Suppliers often sell by the carton, but customers buy single pieces.
VI: **Đơn vị tính** (UoM) là cách đếm một mặt hàng: cái, lon, lốc, thùng hoặc kg. Nhà cung cấp thường bán theo thùng, nhưng khách lại mua lẻ từng cái.
The **base unit** is the smallest unit you count. Every other unit has a **conversion factor**. This is how many base units it holds.
VI: **Đơn vị gốc** là đơn vị nhỏ nhất dùng để đếm. Mỗi đơn vị khác có một **hệ số quy đổi**: nó chứa bao nhiêu đơn vị gốc.
Example: one carton holds 24 cans. The factor is 24. So 5 cartons equal 5 × 24 = 120 cans.
VI: Ví dụ: một thùng chứa 24 lon. Hệ số là 24. Vậy 5 thùng bằng 5 × 24 = 120 lon.`},{type:"diagram",text:`Item: Soft drink 330ml   base unit = CAN
┌────────┬──────────┬──────────────┐
│ UoM    │ = base   │ used for     │
├────────┼──────────┼──────────────┤
│ CAN    │ 1        │ retail sale  │
│ PACK   │ 6        │ promo sale   │
│ CARTON │ 24       │ buy, receive │
└────────┴──────────┴──────────────┘
5 CARTON received → save 5 × 24 = 120 CAN`},{type:"example",title:"A mixed receipt, step by step",text:`Lan runs a drink shop. A supplier sends 3 cartons and 4 packs of soft drink.
VI: Lan có một cửa hàng nước. Nhà cung cấp giao 3 thùng và 4 lốc nước ngọt.
One carton is 24 cans. One pack is 6 cans. Each can costs 8,000 VND.
VI: Một thùng có 24 lon. Một lốc có 6 lon. Mỗi lon giá 8.000đ.
Step 1: 3 × 24 = 72 cans. Step 2: 4 × 6 = 24 cans.
VI: Bước 1: 3 × 24 = 72 lon. Bước 2: 4 × 6 = 24 lon.
Step 3: 72 + 24 = 96 cans saved. Stock value: 96 × 8,000 = 768,000 VND.
VI: Bước 3: 72 + 24 = 96 lon được lưu. Giá trị tồn: 96 × 8.000 = 768.000đ.`},{type:"visual",svg:`<svg viewBox="0 0 360 176"><defs><marker id="u2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<text class="v-muted v-small" x="20" y="18">Receipt: 3 cartons, 4 packs</text>
<rect class="v-good" x="20" y="26" width="240" height="44" rx="6"/><text class="v-title" x="140" y="53" text-anchor="middle">3 × 24 = 72 cans</text>
<rect class="v-accent" x="264" y="26" width="80" height="44" rx="6"/><text class="v-title v-small" x="304" y="53" text-anchor="middle">4 × 6 = 24</text>
<line class="v-line" x1="140" y1="74" x2="140" y2="90" marker-end="url(#u2)"/><line class="v-line" x1="304" y1="74" x2="304" y2="90" marker-end="url(#u2)"/>
<rect class="v-solid" x="20" y="94" width="324" height="40" rx="8"/><text class="v-on-solid v-title" x="182" y="119" text-anchor="middle">Save 96 cans (base unit)</text>
<text class="v-small" x="180" y="152" text-anchor="middle">96 cans × 8,000 VND</text>
<text class="v-title v-small" x="180" y="168" text-anchor="middle">= 768,000 VND of stock</text></svg>`,alt:"Two bars for one receipt. Three cartons of 24 cans make 72 cans. Four packs of 6 cans make 24. Together they are 96 cans, worth 768,000 VND at 8,000 VND each.",caption:`Both units become one total in the base unit: cans.
VI: Cả hai đơn vị đổi thành một tổng duy nhất theo đơn vị gốc: lon.`},{type:"exercise",title:`Count a mixed delivery
VI: Đếm một đợt hàng có nhiều đơn vị`,task:`A supplier sends 2 cartons of water and 7 loose bottles. One carton holds 12 bottles. Save the stock in bottles. How many bottles does the stock row save? Then the shop sells 3 bottles. How many bottles are left?
VI: Nhà cung cấp giao 2 thùng nước và 7 chai lẻ. Một thùng chứa 12 chai. Lưu tồn kho theo chai. Dòng tồn kho lưu bao nhiêu chai? Sau đó cửa hàng bán 3 chai. Còn lại bao nhiêu chai?`,hint:`Convert the cartons first: 2 × 12. Then add the loose bottles. Subtract the sold bottles last.
VI: Quy đổi thùng trước: 2 × 12. Sau đó cộng số chai lẻ. Trừ số chai đã bán ở bước cuối.`,solution:`Step 1: 2 × 12 = 24 bottles. Step 2: 24 + 7 = 31 bottles. The stock row saves Qty 31, unit BOTTLE. Step 3: 31 − 3 = 28 bottles left.
VI: Bước 1: 2 × 12 = 24 chai. Bước 2: 24 + 7 = 31 chai. Dòng tồn kho lưu Qty 31, đơn vị BOTTLE. Bước 3: 31 − 3 = 28 chai còn lại.`},{type:"text",text:`IT side: save every stock quantity in the base unit. Convert only on screens and printed documents.
VI: Phía IT: lưu mọi số lượng tồn theo đơn vị gốc. Chỉ quy đổi trên màn hình và chứng từ in ra.
Also save the unit the user typed. That way a printed receipt matches the paper. Never change a factor in place.
VI: Cũng lưu đơn vị người dùng đã nhập, để phiếu in ra khớp với tờ giấy gốc. Không bao giờ sửa hệ số quy đổi tại chỗ.
Why? If the factor changes from 24 to 20, old documents would read wrong. Those documents show cartons.
VI: Vì sao? Nếu hệ số đổi từ 24 thành 20, các chứng từ cũ hiển thị theo thùng sẽ đọc sai.
Ask the business: can we sell half a carton? Which units can each screen use? Can a factor ever change?
VI: Hỏi nghiệp vụ: có bán nửa thùng không? Mỗi màn hình được dùng đơn vị nào? Hệ số có bao giờ được đổi không?`},{type:"code",code:{lang:"sql",text:`-- Units of an item and their factors
CREATE TABLE ItemUom (
  ItemId  INT         NOT NULL,
  UomCode VARCHAR(10) NOT NULL, -- CAN, CARTON
  Factor  DECIMAL(18,6) NOT NULL, -- base units
  PRIMARY KEY (ItemId, UomCode)
);
-- Stock tables keep Qty in the base unit only`}},{type:"text",text:`Common mistake: keeping stock in a rounded unit. Lan’s shop stores stock in cartons, rounded to 2 decimals.
VI: Lỗi thường gặp: lưu tồn theo một đơn vị đã làm tròn. Cửa hàng của Lan lưu tồn theo thùng, làm tròn 2 số lẻ.
One can is 1 ÷ 24 = 0.0417 carton. But the system saves 0.04. The screen starts at 1 carton.
VI: Một lon là 1 ÷ 24 = 0.0417 thùng, nhưng hệ thống lưu 0.04. Màn hình bắt đầu ở mức 1 thùng.
After 24 single-can sales, the system removes only 0.96 carton. That is 24 × 0.04. The shelf is empty, but the screen still shows 0.04 carton.
VI: Sau 24 lần bán mỗi lần một lon, hệ thống chỉ trừ 24 × 0.04 = 0.96 thùng. Kệ đã trống, nhưng màn hình vẫn ghi 0.04 thùng.`}],remember:`Keep stock in one base unit. Convert only when people type or read the numbers.
VI: Lưu tồn kho theo một đơn vị gốc. Chỉ quy đổi khi người dùng nhập hoặc xem số liệu.`,questions:[{id:"inventory.items-units.1",kind:"mcq",difficulty:"easy",prompt:`A T-shirt comes in 3 colors and 4 sizes. How many SKUs do you need to count its stock correctly?
VI: Một mẫu áo thun có 3 màu và 4 size. Muốn đếm tồn kho đúng, bạn cần bao nhiêu SKU?`,choices:["4","7","12","24"],answer:2,why:`Each color and size pair is counted apart: 3 × 4 = 12. One code for the whole shirt hides which sizes are sold out.
VI: Mỗi cặp màu và size được đếm riêng: 3 × 4 = 12. Nếu chỉ có một mã cho cả mẫu, bạn không biết size nào đã hết.`},{id:"inventory.items-units.2",kind:"scenario",difficulty:"medium",prompt:`The warehouse receives 5 cartons. One carton holds 24 cans. The stock table uses cans as the base unit. What should the stock row save?
VI: Kho nhận 5 thùng. Một thùng có 24 lon. Bảng tồn kho dùng lon làm đơn vị gốc. Dòng tồn kho nên lưu gì?`,choices:["Qty 5, unit CARTON","Qty 120, unit CAN","Qty 5, unit CAN","Qty 0.2083, unit CAN"],answer:1,why:`Convert to the base unit first: 5 × 24 = 120 cans. Then every sum and check uses the same unit.
VI: Quy đổi về đơn vị gốc trước: 5 × 24 = 120 lon. Khi đó mọi phép cộng và kiểm tra đều dùng cùng một đơn vị.`},{id:"inventory.items-units.3",kind:"debug",difficulty:"medium",prompt:`Stock is saved in cartons, rounded to 2 decimals. After many single-can sales, the screen shows 0.04 carton. But the shelf is empty. What is the most likely cause?
VI: Tồn được lưu theo thùng, làm tròn 2 số lẻ. Sau nhiều lần bán lẻ từng lon, màn hình còn 0.04 thùng, nhưng kệ đã trống. Nguyên nhân khả dĩ nhất là gì?`,choices:["Rounding when each can is converted to cartons","A thief took one can without a sales record","The stocktake was done in the wrong unit","The database lost one sale during a power cut"],answer:0,why:`One can is 0.0417 carton, saved as 0.04. Each sale removes a little too little, and the error adds up. Saving cans avoids it.
VI: Một lon là 0.0417 thùng nhưng lưu thành 0.04. Mỗi lần bán trừ thiếu một chút, sai số cộng dồn lại. Lưu theo lon sẽ tránh được lỗi này.`},{id:"inventory.items-units.4",kind:"compare",difficulty:"medium",prompt:`Which design is better for the quantity column in stock tables?
VI: Thiết kế nào tốt hơn cho cột số lượng trong bảng tồn kho?`,choices:["Always the base unit; convert on screens and documents","The unit the user typed, with a unit code on each row"],answer:0,why:`With mixed units, SUM(Qty) adds cans and cartons together. One base unit keeps sums and checks simple and correct.
VI: Nếu trộn nhiều đơn vị, SUM(Qty) sẽ cộng lẫn lon với thùng. Một đơn vị gốc giúp phép cộng và kiểm tra luôn đúng.`}]},{id:"inventory.stock-ledger",title:"Stock is a ledger of movements · Tồn kho là sổ ghi các lần nhập xuất",summary:`Stock is the sum of all movements, never a number typed over.
VI: Tồn kho là tổng mọi lần nhập xuất, không phải một con số gõ đè lên.`,minutes:9,level:"basic",blocks:[{type:"text",text:`In this lesson you learn why stock is a list of changes. It is not one number.
VI: Trong bài này, bạn học vì sao tồn kho là một danh sách các thay đổi, không phải một con số.
Think of a **ledger** (sổ cái) as a notebook. Each line records one change. Stock works the same way.
VI: Hãy nghĩ về **sổ cái** (ledger) như một cuốn sổ mà mỗi dòng ghi một lần thay đổi. Tồn kho cũng hoạt động như vậy.
Stock changes only through **documents** (chứng từ kho). Examples are a goods receipt and a goods issue. Each document creates one or more **stock movements**.
VI: Tồn kho chỉ thay đổi qua **chứng từ kho**, như phiếu nhập hoặc phiếu xuất. Mỗi chứng từ tạo ra một hoặc nhiều **dòng biến động kho** (stock movement).
A movement is one row. It has an item, a place, a quantity and a date. Plus means goods came in. Minus means goods went out.
VI: Một dòng biến động gồm mã hàng, nơi chứa, số lượng và ngày. Số dương là hàng vào. Số âm là hàng ra.`},{type:"text",text:`Why not keep one Quantity field and update it? Because a field only shows the last value. It cannot tell you who changed it, when, or why.
VI: Vì sao không chỉ giữ một cột Quantity rồi cập nhật? Vì một cột chỉ cho biết giá trị cuối. Nó không cho biết ai sửa, lúc nào, hay vì sao.`},{type:"visual",svg:`<svg viewBox="0 0 360 212"><text class="v-muted v-small" x="24" y="20">Document</text><text class="v-muted v-small" x="196" y="20" text-anchor="end">Qty</text><text class="v-muted v-small" x="326" y="20" text-anchor="end">Balance</text>
<rect class="v-box" x="10" y="28" width="340" height="30" rx="6"/><text class="v-small" x="24" y="48">NK-001 receipt</text><text class="v-good-text v-title" x="196" y="48" text-anchor="end">+120</text><text class="v-title" x="326" y="48" text-anchor="end">120</text>
<rect class="v-box" x="10" y="62" width="340" height="30" rx="6"/><text class="v-small" x="24" y="82">XK-015 issue</text><text class="v-bad-text v-title" x="196" y="82" text-anchor="end">-30</text><text class="v-title" x="326" y="82" text-anchor="end">90</text>
<rect class="v-box" x="10" y="96" width="340" height="30" rx="6"/><text class="v-small" x="24" y="116">CK-004 transfer out</text><text class="v-bad-text v-title" x="196" y="116" text-anchor="end">-40</text><text class="v-title" x="326" y="116" text-anchor="end">50</text>
<rect class="v-box" x="10" y="130" width="340" height="30" rx="6"/><text class="v-small" x="24" y="150">DC-002 adjustment</text><text class="v-bad-text v-title" x="196" y="150" text-anchor="end">-2</text><text class="v-title" x="326" y="150" text-anchor="end">48</text>
<rect class="v-accent" x="10" y="172" width="340" height="30" rx="6"/><text class="v-title" x="180" y="192" text-anchor="middle">On hand = SUM(Qty) = 48</text></svg>`,alt:"A table of four stock movements for one item. Rows: receipt plus 120, issue minus 30, transfer minus 40, adjustment minus 2. The running balance ends at 48, which is the sum of all quantities.",caption:`Each row is one document. The sum of the rows is the stock.
VI: Mỗi dòng là một chứng từ. Tổng các dòng chính là tồn kho.`},{type:"text",text:`The stock is the sum of all the rows. For item A: +100 − 20 − 30 + 50 − 10 = 90.
VI: Tồn kho là tổng của mọi dòng. Với mặt hàng A: +100 − 20 − 30 + 50 − 10 = 90.
Nobody types 90 by hand. The system adds the rows each time it needs the number.
VI: Không ai tự gõ số 90. Hệ thống cộng các dòng mỗi lần cần con số này.`},{type:"list",items:[`**Receipt** (phiếu nhập kho): goods come in. Quantity is plus.
VI: Hàng vào kho. Số lượng là số dương.`,`**Issue** (phiếu xuất kho): goods go out for a sale or for production. Quantity is minus.
VI: Hàng ra khỏi kho để bán hoặc để sản xuất. Số lượng là số âm.`,`**Transfer** (phiếu chuyển kho): minus in one warehouse, plus in another. The company total stays the same.
VI: Trừ ở kho này, cộng ở kho kia. Tổng tồn của công ty không đổi.`,`**Adjustment** (phiếu điều chỉnh): fixes stock after a count, damage or loss. It can be plus or minus.
VI: Sửa tồn sau kiểm kê, hàng hỏng hoặc mất. Có thể dương hoặc âm.`]},{type:"text",text:`Each document has two states. A **draft** (nháp) is not counted yet. **Posting** (ghi sổ) makes it real and writes the movement rows.
VI: Mỗi chứng từ có hai trạng thái. **Nháp** (draft) chưa được tính vào tồn. **Ghi sổ** (posting) làm chứng từ có hiệu lực và ghi các dòng biến động.
Posting is one step. It writes the movement rows and updates the balance together. If one part fails, nothing is saved.
VI: Ghi sổ là một bước duy nhất. Nó ghi các dòng biến động và cập nhật số dư cùng lúc. Nếu một phần lỗi, không phần nào được lưu.`},{type:"visual",svg:`<svg viewBox="0 0 360 200"><defs><marker id="u8" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-box" x="10" y="14" width="100" height="50" rx="8"/><text class="v-title" x="60" y="36" text-anchor="middle">Draft</text><text class="v-small v-muted" x="60" y="54" text-anchor="middle">no stock change</text>
<line class="v-line" x1="112" y1="39" x2="138" y2="39" marker-end="url(#u8)"/>
<rect class="v-accent" x="140" y="14" width="100" height="50" rx="8"/><text class="v-title" x="190" y="36" text-anchor="middle">Post</text><text class="v-small" x="190" y="54" text-anchor="middle">one transaction</text>
<line class="v-line" x1="242" y1="39" x2="268" y2="39" marker-end="url(#u8)"/>
<rect class="v-good" x="270" y="14" width="80" height="50" rx="8"/><text class="v-title" x="310" y="36" text-anchor="middle">Stock</text><text class="v-small" x="310" y="54" text-anchor="middle">updated</text>
<text class="v-muted v-small" x="180" y="80" text-anchor="middle">Post writes both or neither</text>
<rect class="v-soft" x="20" y="88" width="150" height="40" rx="6"/><text class="v-small" x="95" y="112" text-anchor="middle">+1 movement row</text>
<rect class="v-soft" x="190" y="88" width="150" height="40" rx="6"/><text class="v-small" x="265" y="112" text-anchor="middle">Balance 120 → 90</text>
<text class="v-muted v-small" x="20" y="152">Wrong: NK-001 says +120</text>
<rect class="v-warn" x="20" y="160" width="320" height="30" rx="6"/><text class="v-title v-small" x="180" y="180" text-anchor="middle">Fix: post -20, never delete</text></svg>`,alt:"Three boxes: Draft, Post and Stock. A draft changes nothing. Posting writes one movement row and the new balance together. A wrong receipt is fixed by posting minus 20. Do not delete the row.",caption:`Posting writes the row and the balance in one step.
VI: Ghi sổ là ghi dòng biến động và số dư trong cùng một bước.`},{type:"compare",left:{title:"Overwrite a Quantity field ⚠️",items:[`No history: who changed it, and why?
VI: Không có lịch sử: ai sửa, và sửa vì sao?`,`Two users can overwrite each other.
VI: Hai người có thể ghi đè lên nhau.`,`Cannot show stock on a past date.
VI: Không xem được tồn kho của một ngày trong quá khứ.`]},right:{title:"Ledger of movements ✅",items:[`Every change links to a document.
VI: Mỗi thay đổi đều gắn với một chứng từ.`,`Stock on any date = sum up to that date.
VI: Tồn kho ngày bất kỳ = tổng đến hết ngày đó.`,`A fast balance table can be rebuilt from it.
VI: Bảng số dư nhanh có thể dựng lại từ sổ này.`]}},{type:"text",text:`Big systems also keep a **balance table** (bảng số dư) for fast reads. It holds the current stock for each item and warehouse.
VI: Hệ thống lớn thường có thêm **bảng số dư** để đọc nhanh. Bảng này lưu tồn hiện tại theo từng mã hàng và từng kho.
Update the balance table in the **same transaction** (an all-or-nothing step). Do it together with the movement row. The ledger stays the source of truth.
VI: Cập nhật bảng số dư trong **cùng một giao dịch** (một bước tất cả hoặc không gì cả) với dòng biến động. Sổ biến động vẫn là nguồn dữ liệu gốc.`},{type:"code",code:{lang:"sql",text:`-- On hand per item and warehouse
SELECT ItemId, WarehouseId,
       SUM(Qty) AS OnHand
FROM StockMovement
GROUP BY ItemId, WarehouseId;`}},{type:"example",title:"A receipt typed wrong",text:`Minh runs an electronics shop. The clerk types receipt NK-001 as 120 USB cables.
VI: Minh có một cửa hàng điện tử. Nhân viên nhập phiếu NK-001 là 120 dây USB.
The real delivery was 100 cables at 45,000 VND each. The system is now 20 cables too high.
VI: Hàng thật chỉ có 100 dây, giá 45.000đ mỗi dây. Hệ thống đang cao hơn 20 dây.
The value error is 20 × 45,000 = 900,000 VND. Post a reverse row of −20 to fix it.
VI: Giá trị sai lệch là 20 × 45.000 = 900.000đ. Ghi một dòng đảo ngược −20 để sửa.
Both rows stay, so the history shows what happened and why.
VI: Cả hai dòng đều được giữ, nên lịch sử cho thấy chuyện gì đã xảy ra và vì sao.`},{type:"text",text:`Ask the business: is negative stock allowed, and in which warehouses?
VI: Hỏi nghiệp vụ: có cho phép tồn âm không, và ở kho nào?
Can a posted document be edited, or only cancelled with a reverse document?
VI: Chứng từ đã ghi sổ có được sửa không, hay chỉ được hủy bằng chứng từ đảo ngược?`},{type:"exercise",title:`Stock on two dates
VI: Tồn kho ở hai ngày`,task:`Item B has these movements in May. 1 May: receipt +50. 3 May: issue −12. 5 May: transfer out −8. 6 May: adjustment −1, broken. 7 May: receipt +20. Find the stock at the end of 6 May. Then find it at the end of 7 May.
VI: Mặt hàng B có các biến động trong tháng 5. Ngày 1/5: nhập +50. Ngày 3/5: xuất −12. Ngày 5/5: chuyển đi −8. Ngày 6/5: điều chỉnh −1, hỏng. Ngày 7/5: nhập +20. Tìm tồn cuối ngày 6/5, rồi tồn cuối ngày 7/5.`,hint:`Add only the movements up to the date. For the second answer, add the later movement too.
VI: Chỉ cộng các dòng đến hết ngày đó. Với câu thứ hai, cộng thêm dòng sau đó.`,solution:`End of 6 May: 50 − 12 − 8 − 1 = 29. End of 7 May: 29 + 20 = 49. Answer: 29 on 6 May, 49 on 7 May.
VI: Cuối ngày 6/5: 50 − 12 − 8 − 1 = 29. Cuối ngày 7/5: 29 + 20 = 49. Đáp số: 29 vào ngày 6/5, 49 vào ngày 7/5.`},{type:"text",text:`Common mistake: a developer deletes a wrong movement row to "clean up". The balance table keeps the old number.
VI: Lỗi thường gặp: lập trình viên xóa một dòng biến động sai cho "gọn". Bảng số dư vẫn giữ con số cũ.
Now the two places disagree, and nobody knows which number is right.
VI: Lúc này hai nơi báo hai số khác nhau, và không ai biết số nào đúng.`}],remember:`Stock is the sum of movements. Never edit the stock number directly.
VI: Tồn kho là tổng các dòng biến động. Không bao giờ sửa trực tiếp con số tồn.`,questions:[{id:"inventory.stock-ledger.1",kind:"mcq",difficulty:"easy",prompt:`Goods move from the Hanoi warehouse to the HCMC warehouse. What should the transfer document create?
VI: Hàng chuyển từ kho Hà Nội sang kho TP.HCM. Phiếu chuyển kho nên tạo ra những gì?`,choices:["A minus row in Hanoi and a plus row in HCMC","A plus row in HCMC only","A minus row in Hanoi only","An edit of the Quantity field in both warehouses"],answer:0,why:`A transfer is two movements: out of one place, into another. The company total does not change.
VI: Chuyển kho gồm hai dòng biến động: xuất khỏi kho này, nhập vào kho kia. Tổng tồn của công ty không đổi.`},{id:"inventory.stock-ledger.2",kind:"scenario",difficulty:"medium",prompt:`After a count, a user wants to type the new stock number directly. What is the better design?
VI: Sau kiểm kê, người dùng muốn một màn hình để gõ thẳng số tồn mới. Thiết kế nào tốt hơn?`,choices:["Post an adjustment with the difference and a reason","Update the Quantity column to the counted number","Delete old movements and insert one row with the count","Let the user edit the qty of the latest movement row"],answer:0,why:`An adjustment keeps history: who changed stock, by how much, and why. Overwriting or deleting rows destroys the audit trail.
VI: Phiếu điều chỉnh giữ lại lịch sử: ai sửa, sửa bao nhiêu và vì sao. Ghi đè hoặc xóa dòng sẽ làm mất dấu vết kiểm tra.`},{id:"inventory.stock-ledger.3",kind:"code",difficulty:"easy",prompt:`What is the on-hand quantity for this item?
VI: Tồn thực tế của mặt hàng này là bao nhiêu?`,code:{lang:"text",text:`StockMovement: item A, warehouse 1
Qty: +100, -20, -30, +50, -10`},choices:["90","100","110","210"],answer:0,why:`100 − 20 − 30 + 50 − 10 = 90. On hand is simply the sum of all movements.
VI: 100 − 20 − 30 + 50 − 10 = 90. Tồn thực tế chỉ là tổng của mọi dòng biến động.`},{id:"inventory.stock-ledger.4",kind:"debug",difficulty:"hard",prompt:"The `StockBalance` table says 50. `SUM(Qty)` from the movement ledger says 47. What is the most likely cause?\nVI: Bảng `StockBalance` ghi 50. `SUM(Qty)` từ sổ biến động ra 47. Nguyên nhân khả dĩ nhất là gì?",choices:["Some code changed the balance without a movement in one transaction","SUM ignores negative numbers, so the ledger total is too low","The ledger has rounding errors, because Qty is an integer","Normal: the balance is always a little ahead of the ledger"],answer:0,why:`The balance and the movement must be saved together. If one path skips the movement, the two numbers drift apart. So does saving them in two transactions.
VI: Số dư và dòng biến động phải được lưu cùng nhau. Nếu một đoạn code bỏ qua dòng biến động, hoặc lưu bằng hai giao dịch riêng, hai số sẽ lệch nhau.`},{id:"inventory.stock-ledger.5",kind:"truefalse",difficulty:"medium",prompt:`Negative stock is always a bug, so the system must always block it.
VI: Tồn âm luôn là lỗi, nên hệ thống phải luôn chặn nó.`,choices:["True","False"],answer:1,why:`It is a business decision. Some shops allow it. Then sales do not stop when a receipt is late. Ask, and make it a setting.
VI: Đây là quyết định của nghiệp vụ. Có nơi cho phép để không phải dừng bán khi phiếu nhập về trễ. Hãy hỏi và làm thành một tùy chọn cấu hình.`}]},{id:"inventory.locations",title:"Warehouses, locations and picking · Kho, vị trí và lấy hàng",summary:`Know where each unit sits, and pick in the right order.
VI: Biết từng món hàng nằm ở đâu, và lấy hàng theo đúng thứ tự.`,minutes:10,level:"practical",blocks:[{type:"text",text:`In this lesson you learn where goods sit in a warehouse. You also learn how to pick them.
VI: Trong bài này, bạn học hàng nằm ở đâu trong kho và cách lấy hàng.
A large **warehouse** (kho) is split into **zones** (khu). Each zone is split into **bins** (ô kệ). A bin is one exact spot, like one shelf level in one aisle.
VI: Một **kho** lớn được chia thành nhiều **khu** (zone), và mỗi khu chia thành nhiều **ô kệ** (bin). Một ô kệ là một chỗ cụ thể, như một tầng kệ trong một lối đi.
Without bin locations, a picker must search the whole zone. That wastes time, and the wrong bin is often taken.
VI: Nếu không có vị trí ô kệ, người lấy hàng phải tìm khắp cả khu. Việc đó tốn thời gian, và hay lấy nhầm ô.`},{type:"diagram",text:`Warehouse HN-01 (Kho Hà Nội)
 ├── Zone A  Cold (kho lạnh)
 │    ├── Bin A-01-01
 │    └── Bin A-01-02
 └── Zone B  Dry (kho khô)
      ├── Bin B-03-01  ← aisle 03, level 01
      └── Bin B-03-02
Bin code = Zone - Aisle - Level`},{type:"text",text:`Goods follow a path. First they arrive at the **dock** (khu nhận hàng). Then **putaway** (cất hàng) moves them into a bin.
VI: Hàng đi theo một đường. Đầu tiên hàng đến **khu nhận hàng** (dock). Sau đó **cất hàng** (putaway) đưa hàng vào ô kệ.
Later, **picking** (lấy hàng) takes units from the bin. **Shipping** sends them out. Each step changes where the stock sits.
VI: Sau đó, **lấy hàng** (picking) lấy hàng từ ô kệ, và **xuất giao** đưa hàng đi. Mỗi bước làm thay đổi vị trí của tồn kho.`},{type:"visual",svg:`<svg viewBox="0 0 360 196"><defs><marker id="u4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-warn" x="7" y="20" width="58" height="36" rx="6"/><text class="v-title v-small" x="36" y="43" text-anchor="middle">Dock</text>
<line class="v-line" x1="65" y1="38" x2="77" y2="38" marker-end="url(#u4)"/>
<rect class="v-box" x="79" y="20" width="58" height="36" rx="6"/><text class="v-title v-small" x="108" y="43" text-anchor="middle">Putaway</text>
<line class="v-line" x1="137" y1="38" x2="149" y2="38" marker-end="url(#u4)"/>
<rect class="v-good" x="151" y="20" width="58" height="36" rx="6"/><text class="v-title v-small" x="180" y="43" text-anchor="middle">Bin</text>
<line class="v-line" x1="209" y1="38" x2="221" y2="38" marker-end="url(#u4)"/>
<rect class="v-box" x="223" y="20" width="58" height="36" rx="6"/><text class="v-title v-small" x="252" y="43" text-anchor="middle">Pick</text>
<line class="v-line" x1="281" y1="38" x2="293" y2="38" marker-end="url(#u4)"/>
<rect class="v-box" x="295" y="20" width="58" height="36" rx="6"/><text class="v-title v-small" x="324" y="43" text-anchor="middle">Ship</text>
<rect class="v-warn" x="7" y="78" width="164" height="50" rx="6"/><text class="v-small" x="89" y="98" text-anchor="middle">At the dock: in stock,</text><text class="v-small" x="89" y="114" text-anchor="middle">not pickable yet</text>
<rect class="v-good" x="189" y="78" width="164" height="50" rx="6"/><text class="v-small" x="271" y="98" text-anchor="middle">In a bin: the pick list</text><text class="v-small" x="271" y="114" text-anchor="middle">shows item, bin, qty</text>
<text class="v-muted v-small" x="180" y="162" text-anchor="middle">Goods that expire: FEFO,</text><text class="v-muted v-small" x="180" y="180" text-anchor="middle">other goods: FIFO</text></svg>`,alt:"A row of five steps: dock, putaway, bin, pick and ship. Below it, goods at the dock are in stock but not pickable. Goods in a bin appear on the pick list. The list shows item, bin and quantity.",caption:`Stock is only pickable after putaway puts it in a bin.
VI: Hàng chỉ lấy được sau khi cất lên ô kệ.`},{type:"text",text:"Now stock is kept per **item + bin**, not just per item. The movement table gets a `BinId` column. Each row then says where the goods went.\nVI: Lúc này tồn kho được theo dõi theo **mã hàng + ô kệ**, không chỉ theo mã hàng. Bảng biến động có thêm cột `BinId`, để mỗi dòng ghi rõ hàng ở đâu.\nA **pick list** (phiếu lấy hàng) tells the picker what to take. It shows the item, the bin and the quantity. Good systems sort the lines by walking route.\nVI: **Phiếu lấy hàng** (pick list) cho người lấy hàng biết mã hàng, ô kệ và số lượng. Hệ thống tốt sắp xếp các dòng theo đường đi, để người lấy hàng chỉ đi một vòng."},{type:"compare",left:{title:"FIFO: first in, first out",items:[`Pick the oldest received stock first.
VI: Lấy hàng nhập về sớm nhất trước.`,`Good for most goods without an expiry date.
VI: Hợp với hầu hết hàng không có hạn dùng.`,`Uses the receipt date.
VI: Dựa vào ngày nhập kho.`]},right:{title:"FEFO: first expired, first out",items:[`Pick the earliest expiry date first.
VI: Lấy hàng có hạn dùng sớm nhất trước.`,`Best for food, medicine and cosmetics.
VI: Phù hợp với thực phẩm, thuốc và mỹ phẩm.`,`Uses the expiry date of the lot.
VI: Dựa vào hạn dùng của lô hàng.`]}},{type:"text",text:`FEFO matters for goods with an expiry date. Example: lot 1 expires on 30 June, lot 2 on 10 June. FEFO picks lot 2 first, even though lot 2 arrived later.
VI: FEFO quan trọng với hàng có hạn dùng. Ví dụ: lô 1 hết hạn ngày 30/6, lô 2 hết hạn ngày 10/6. FEFO lấy lô 2 trước, dù lô 2 nhập về sau.`},{type:"visual",svg:`<svg viewBox="0 0 360 180">
<text class="v-muted v-small" x="20" y="18">Bin B-03-01: 30 cartons</text>
<rect class="v-good" x="20" y="26" width="200" height="34" rx="6"/><text class="v-title v-small" x="120" y="47" text-anchor="middle">pick 30</text>
<text class="v-muted v-small" x="20" y="84">Bin B-03-02: 18 cartons</text>
<rect class="v-good" x="20" y="92" width="66.7" height="34" rx="6"/><text class="v-title v-small" x="53" y="113" text-anchor="middle">pick 10</text>
<rect class="v-soft" x="86.7" y="92" width="53.3" height="34" rx="6"/><text class="v-small" x="113" y="113" text-anchor="middle">left 8</text>
<text class="v-title" x="20" y="152">Order 40: 30 + 10 picked</text>
<text class="v-muted v-small" x="20" y="170">8 cartons stay in B-03-02</text></svg>`,alt:"Two bins of cartons. Bin B-03-01 has 30 cartons, all picked. Bin B-03-02 has 18 cartons. 10 are picked and 8 stay in the bin. The order of 40 is 30 plus 10.",caption:`Empty the first bin, then take the rest from the next bin.
VI: Lấy hết ô đầu tiên, rồi lấy phần còn lại ở ô kế tiếp.`},{type:"example",title:"One delivery, from dock to truck",text:`Tuấn runs a food warehouse. A truck brings 48 cartons of noodles. Each carton is worth 180,000 VND.
VI: Tuấn quản lý một kho thực phẩm. Một xe tải chở 48 thùng mì. Mỗi thùng trị giá 180.000đ.
Putaway sends 30 cartons to bin B-03-01 and 18 to B-03-02. Stock value: 48 × 180,000 = 8,640,000 VND.
VI: Cất hàng đưa 30 thùng vào ô B-03-01 và 18 thùng vào ô B-03-02. Giá trị tồn: 48 × 180.000 = 8.640.000đ.
An order needs 40 cartons. The pick list says: 30 from B-03-01, then 10 from B-03-02. That leaves 8 in B-03-02.
VI: Một đơn cần 40 thùng. Phiếu lấy hàng ghi: 30 từ B-03-01, rồi 10 từ B-03-02. Còn lại 8 thùng ở B-03-02.
The order is worth 40 × 180,000 = 7,200,000 VND.
VI: Đơn này trị giá 40 × 180.000 = 7.200.000đ.`},{type:"text",text:`Ask the business: FIFO or FEFO for each item group? Can one bin hold many items? Must pickers scan the bin and the item to confirm?
VI: Hỏi nghiệp vụ: nhóm hàng nào dùng FIFO, nhóm nào dùng FEFO? Một ô kệ có chứa nhiều mã hàng không? Người lấy hàng có phải quét ô kệ và mã hàng để xác nhận không?`},{type:"exercise",title:`Build a pick list
VI: Lập phiếu lấy hàng`,task:`An order needs 25 cartons of noodles. Bin A-02-01 has 15 cartons. Bin A-02-02 has 20 cartons. Take all of the first bin before the second. How many cartons come from each bin? How many stay in A-02-02? What is the order value at 180,000 VND per carton?
VI: Một đơn cần 25 thùng mì. Ô A-02-01 có 15 thùng. Ô A-02-02 có 20 thùng. Lấy hết ô đầu tiên rồi mới sang ô sau. Mỗi ô lấy bao nhiêu thùng? Còn lại bao nhiêu ở A-02-02? Giá trị đơn hàng, biết mỗi thùng 180.000đ?`,hint:`Take 15 from the first bin, then the rest from the second. Multiply the total by 180,000.
VI: Lấy 15 thùng từ ô đầu, rồi lấy phần còn lại từ ô sau. Nhân tổng số thùng với 180.000.`,solution:`Step 1: A-02-01 gives 15 cartons, so it is empty. Step 2: 25 − 15 = 10 cartons from A-02-02. Step 3: A-02-02 keeps 20 − 10 = 10 cartons. Step 4: 25 × 180,000 = 4,500,000 VND. Answer: 15 and 10 cartons, 10 left in A-02-02, value 4,500,000 VND.
VI: Bước 1: A-02-01 cho 15 thùng, nên ô này hết. Bước 2: 25 − 15 = 10 thùng lấy từ A-02-02. Bước 3: A-02-02 còn 20 − 10 = 10 thùng. Bước 4: 25 × 180.000 = 4.500.000đ. Đáp số: lấy 15 và 10 thùng, còn 10 thùng ở A-02-02, giá trị 4.500.000đ.`},{type:"text",text:`Common mistake: the pick list shows only the item and the total. Pickers then search by hand and often take from the wrong bin.
VI: Lỗi thường gặp: phiếu lấy hàng chỉ ghi mã hàng và tổng số. Người lấy hàng phải tự tìm và hay lấy nhầm ô.
Always print the bin code on the pick list. Pickers then walk straight to the right place.
VI: Luôn in mã ô kệ trên phiếu lấy hàng. Khi đó người lấy hàng đi thẳng đến đúng chỗ.`}],remember:`Stock lives in bins. Pick by FEFO when goods expire, otherwise by FIFO.
VI: Hàng nằm ở ô kệ. Hàng có hạn dùng thì lấy theo FEFO, còn lại lấy theo FIFO.`,questions:[{id:"inventory.locations.1",kind:"mcq",difficulty:"easy",prompt:`Goods are received at the dock but not put away yet. Where should the system show this stock?
VI: Hàng đã nhận ở khu nhận hàng nhưng chưa cất lên kệ. Hệ thống nên hiển thị tồn này ở đâu?`,choices:["In a receiving location, not yet pickable","In its final bin, ready to be picked","Nowhere: stock is zero until putaway","In the default bin of the item master"],answer:0,why:`The goods are in the building, so they count as stock. But pickers cannot find them in a bin yet.
VI: Hàng đã ở trong kho nên vẫn tính là tồn. Nhưng người lấy hàng chưa thể tìm thấy chúng trên ô kệ.`},{id:"inventory.locations.2",kind:"scenario",difficulty:"medium",prompt:`The warehouse uses FEFO. An order needs 10 yogurts. Which lot should be picked?
VI: Kho áp dụng FEFO. Một đơn cần 10 hộp sữa chua. Nên lấy lô nào?`,code:{lang:"text",text:`Lot  Received  Expires  Qty
L1   01/05     20/06    10
L2   05/05     10/06    10`},choices:["L1","L2","5 from each lot","Either one"],answer:1,why:`FEFO looks at the expiry date, not the receipt date. L2 expires first, so it goes out first.
VI: FEFO xét theo hạn sử dụng, không theo ngày nhập. L2 hết hạn trước nên xuất trước.`},{id:"inventory.locations.3",kind:"perf",difficulty:"medium",prompt:`Pickers walk about 12 km a day. The pick list is sorted by order line number. What would help most?
VI: Người lấy hàng đi bộ khoảng 12 km mỗi ngày. Phiếu lấy hàng đang sắp theo số dòng của đơn. Cách nào giúp nhiều nhất?`,choices:["Sort lines by bin, along the walking route","Sort lines by item name, from A to Z","Give each picker one order line per trip","Sort lines by quantity, biggest first"],answer:0,why:`Order lines jump all over the warehouse. Sorting by bin along the route means one walk, with no going back.
VI: Các dòng đơn nằm rải rác khắp kho. Sắp theo ô kệ dọc đường đi thì chỉ cần đi một vòng, không phải quay lại.`},{id:"inventory.locations.4",kind:"debug",difficulty:"hard",prompt:`The system says bin B-03-01 has 20 units. The picker finds it empty. The 20 units are in B-03-02. What is the most likely gap?
VI: Hệ thống báo ô B-03-01 có 20 cái. Người lấy hàng thấy ô trống. 20 cái nằm ở ô B-03-02. Lỗ hổng quy trình khả dĩ nhất là gì?`,choices:["Putaway was confirmed without scanning the real bin","The item master has the wrong unit of measure","The FEFO rule picked the wrong lot","The sales order reserved too much stock"],answer:0,why:`The total is right, but the bin is wrong. That points to putaway. The user confirmed the suggested bin. They did not scan where the goods really went.
VI: Tổng số đúng nhưng sai ô kệ. Lỗi nằm ở bước cất hàng: người dùng xác nhận ô gợi ý mà không quét ô thật đã đặt hàng.`},{id:"inventory.locations.5",kind:"scenario",difficulty:"medium",prompt:`A picker walks to bin A-05-01, then A-01-02, then A-05-03. This is for one small order. Walks are long every day. What change helps most?
VI: Một người lấy hàng đi qua ô A-05-01, rồi A-01-02, rồi A-05-03 cho một đơn nhỏ. Ngày nào đường đi cũng dài. Thay đổi nào giúp nhiều nhất?`,choices:["Sort the pick lines by bin code along the route","Print the pick list in item name order","Give each picker a bigger cart","Sort the pick lines by order number"],answer:0,why:`Sorting by route turns zig-zag walks into one walk along the aisles.
VI: Sắp theo đường đi biến những lần đi ngoằn ngoèo thành một vòng đi dọc các lối kệ.`}]},{id:"inventory.lots-serials",title:"Lots, serial numbers and expiry · Số lô, số serial và hạn dùng",summary:`Track which batch went to which customer.
VI: Theo dõi lô hàng nào đã đến khách hàng nào.`,minutes:9,level:"practical",blocks:[{type:"text",text:`In this lesson you learn how to track batches. You also learn how to trace a bad product.
VI: Trong bài này, bạn học cách theo dõi lô hàng và truy tìm sản phẩm lỗi.
A **lot** (lô hàng, or batch) is a group of units. They are made or received together. They share one lot number and usually one expiry date.
VI: **Lô hàng** (lot, batch) là nhóm hàng được sản xuất hoặc nhập cùng nhau. Chúng dùng chung một số lô và thường có chung một hạn dùng.
A **serial number** (số serial) identifies one single unit. For example, a phone or a motorbike engine. No two units share it.
VI: **Số serial** xác định đúng một chiếc, như một điện thoại hay một động cơ xe máy. Không có hai chiếc nào trùng số.`},{type:"text",text:`Why track them? When a product is faulty or unsafe, the business must act fast. It must find every affected unit. This is called a **recall** (thu hồi).
VI: Vì sao phải theo dõi? Khi sản phẩm bị lỗi hoặc không an toàn, doanh nghiệp phải tìm nhanh mọi đơn vị bị ảnh hưởng. Việc này gọi là **thu hồi** (recall).
Without a lot number on each movement, you can only guess. You cannot tell which customers got the bad batch.
VI: Nếu mỗi dòng biến động không có số lô, bạn chỉ có thể đoán khách nào nhận lô lỗi.`},{type:"visual",svg:`<svg viewBox="0 0 360 236"><defs><marker id="u5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-box" x="110" y="8" width="140" height="34" rx="6"/><text class="v-title v-small" x="180" y="30" text-anchor="middle">Supplier lot S-77</text>
<line class="v-line" x1="180" y1="42" x2="180" y2="64" marker-end="url(#u5)"/><text class="v-small" x="190" y="58">receipt NK-010</text>
<rect class="v-accent" x="110" y="66" width="140" height="34" rx="6"/><text class="v-title v-small" x="180" y="88" text-anchor="middle">Our lot L2405</text>
<line class="v-line" x1="160" y1="100" x2="60" y2="134" marker-end="url(#u5)"/><line class="v-line" x1="180" y1="100" x2="180" y2="134" marker-end="url(#u5)"/><line class="v-line" x1="200" y1="100" x2="300" y2="134" marker-end="url(#u5)"/>
<rect class="v-good" x="10" y="136" width="100" height="42" rx="6"/><text class="v-small" x="60" y="154" text-anchor="middle">Customer A</text><text class="v-muted v-small" x="60" y="170" text-anchor="middle">XK-101</text>
<rect class="v-good" x="130" y="136" width="100" height="42" rx="6"/><text class="v-small" x="180" y="154" text-anchor="middle">Customer B</text><text class="v-muted v-small" x="180" y="170" text-anchor="middle">XK-115</text>
<rect class="v-good" x="250" y="136" width="100" height="42" rx="6"/><text class="v-small" x="300" y="154" text-anchor="middle">Customer C</text><text class="v-muted v-small" x="300" y="170" text-anchor="middle">XK-130</text>
<text class="v-muted v-small" x="180" y="204" text-anchor="middle">Lot saved on every issue</text><text class="v-muted v-small" x="180" y="222" text-anchor="middle">= instant recall list</text></svg>`,alt:"A tree. Supplier lot S-77 is received into our lot L2405. From that lot, three issue documents go to customers A, B and C. Because each issue saves the lot, a recall list is easy to build.",caption:`Follow the arrows down for a recall, and up to find the source.
VI: Đi xuôi mũi tên để thu hồi, đi ngược để tìm nguồn.`},{type:"compare",left:{title:"Lot",items:[`Many units share one number.
VI: Nhiều đơn vị dùng chung một số.`,`Used for food, medicine and paint.
VI: Dùng cho thực phẩm, thuốc và sơn.`,`Stock key: item + bin + lot.
VI: Khóa tồn kho: mã hàng + ô kệ + lô.`]},right:{title:"Serial",items:[`One number = one unit.
VI: Một số là một chiếc.`,`Used for phones, laptops and machines.
VI: Dùng cho điện thoại, laptop và máy móc.`,`Stock key: item + serial. Quantity is always 1.
VI: Khóa tồn kho: mã hàng + serial. Số lượng luôn là 1.`]}},{type:"text",text:`**Traceability** (truy xuất nguồn gốc) works both ways. Forward: which customers got lot L2405? Backward: which supplier lot did this customer’s item come from?
VI: **Truy xuất nguồn gốc** đi theo hai chiều. Chiều xuôi: lô L2405 đã giao cho những khách nào? Chiều ngược: hàng của khách này đến từ lô nào của nhà cung cấp?`},{type:"visual",svg:`<svg viewBox="0 0 360 190"><text class="v-muted v-small" x="20" y="16">Lot L2405 received: 500</text>
<rect class="v-good" x="20" y="24" width="76.8" height="40" rx="4"/><text class="v-title v-small" x="58.4" y="48" text-anchor="middle">120</text>
<rect class="v-accent" x="96.8" y="24" width="128" height="40" rx="4"/><text class="v-title v-small" x="160.8" y="48" text-anchor="middle">200</text>
<rect class="v-box" x="224.8" y="24" width="64" height="40" rx="4"/><text class="v-title v-small" x="256.8" y="48" text-anchor="middle">100</text>
<rect class="v-soft" x="288.8" y="24" width="51.2" height="40" rx="4"/><text class="v-title v-small" x="314.4" y="48" text-anchor="middle">80</text>
<text class="v-small" x="58.4" y="82" text-anchor="middle">to A</text><text class="v-small" x="160.8" y="82" text-anchor="middle">to B</text><text class="v-small" x="256.8" y="82" text-anchor="middle">to C</text><text class="v-muted v-small" x="314.4" y="82" text-anchor="middle">in bin</text>
<rect class="v-warn" x="20" y="108" width="320" height="56" rx="8"/><text class="v-title" x="180" y="132" text-anchor="middle">Recall: call 3 customers</text><text class="v-small" x="180" y="152" text-anchor="middle">420 units must come back</text></svg>`,alt:"One bar for lot L2405 with 500 units. Its parts are: 120 to customer A, 200 to B, 100 to C. 80 are still in the bin. A recall means calling three customers for 420 units.",caption:`Each issue cuts a piece off the lot. Each piece has a customer.
VI: Mỗi lần xuất cắt một phần khỏi lô, và mỗi phần có một khách hàng.`},{type:"example",title:"Lot L2405 in numbers",text:`A shop receives lot L2405: 500 cups of yogurt, cost 12,000 VND each.
VI: Cửa hàng nhận lô L2405: 500 hộp sữa chua, giá vốn 12.000đ mỗi hộp.
It issues 120 cups to customer A. It then issues 200 to B and 100 to C. Still in the bin: 500 − 420 = 80 cups.
VI: Xuất 120 hộp cho khách A, 200 cho B và 100 cho C. Còn trong kho: 500 − 420 = 80 hộp.
A recall means calling 3 customers and getting back 420 cups. Those cups cost 420 × 12,000 = 5,040,000 VND.
VI: Thu hồi nghĩa là gọi 3 khách và lấy lại 420 hộp. Số hộp này trị giá 420 × 12.000 = 5.040.000đ theo giá vốn.`},{type:"text",text:`The **expiry date** (hạn dùng) is the last day a lot may be used. After that, it must not be sold. Check it at every issue. FEFO sends the earliest expiry out first.
VI: **Hạn dùng** là ngày cuối cùng lô hàng được bán hoặc sử dụng. Hãy kiểm tra ở mỗi lần xuất. FEFO xuất lô có hạn sớm nhất trước.
Example: today is 15 June. A lot that expired on 10 June must be blocked. It must not be sold.
VI: Ví dụ: hôm nay là 15/6. Lô hết hạn ngày 10/6 phải bị chặn. Không được bán lô này.
Some shops also block lots that expire too soon. The business sets that limit, so ask before you build it.
VI: Có nơi còn chặn cả lô sắp hết hạn. Giới hạn này do nghiệp vụ đặt, nên hãy hỏi trước khi làm.`},{type:"code",code:{lang:"sql",text:`-- Who received lot L2405?
SELECT c.Name, d.DocNo, m.Qty
FROM StockMovement m
JOIN IssueDoc d ON d.Id = m.DocId
JOIN Customer c ON c.Id = d.CustomerId
WHERE m.LotNo = 'L2405'
  AND m.Qty < 0;`}},{type:"text",text:`IT side: save the lot or serial on **every** movement. Usually, a barcode scan does this. Block issues of expired lots.
VI: Phía IT: lưu số lô hoặc số serial trên **mọi** dòng biến động, thường bằng quét mã vạch. Chặn xuất các lô đã hết hạn.
Ask the business: which items need lots or serials? Can a lot close to expiry still be sold, and to whom?
VI: Hỏi nghiệp vụ: mặt hàng nào cần quản lý theo lô hoặc serial? Lô sắp hết hạn có còn được bán không, và bán cho ai?`},{type:"exercise",title:`Recall a yogurt lot
VI: Thu hồi một lô sữa chua`,task:`A shop receives lot Y-300: 300 cups. It sells 85 cups to customer X and 140 cups to customer Y. The lot is recalled. How many customers must be called? How many cups are out? How many cups are still in the bin?
VI: Cửa hàng nhận lô Y-300: 300 hộp. Bán 85 hộp cho khách X và 140 hộp cho khách Y. Lô này bị thu hồi. Phải gọi bao nhiêu khách? Bao nhiêu hộp đã ra khỏi kho? Còn bao nhiêu hộp trong kho?`,hint:`Add the cups sold to each customer. Then subtract that total from the lot size.
VI: Cộng số hộp đã bán cho từng khách. Sau đó trừ tổng đó khỏi số hộp của lô.`,solution:`Customers to call: 2 (X and Y). Cups out: 85 + 140 = 225. Cups in the bin: 300 − 225 = 75. Answer: call 2 customers. 225 cups are out, and 75 cups are still in the bin.
VI: Số khách phải gọi: 2 (X và Y). Số hộp đã ra: 85 + 140 = 225. Số hộp còn trong kho: 300 − 225 = 75. Đáp số: gọi 2 khách, 225 hộp đã ra, 75 hộp còn trong kho.`},{type:"text",text:`Common mistake: two lots are put in one bin. They are picked without a scan. The lot on the issue is then a guess.
VI: Lỗi thường gặp: hai lô để chung một ô kệ và lấy hàng không quét mã. Số lô trên phiếu xuất khi đó chỉ là đoán.
Scan the lot at every pick. A guessed lot number breaks the recall list.
VI: Hãy quét số lô ở mọi lần lấy hàng. Một số lô bị đoán sẽ làm sai danh sách thu hồi.`}],remember:`Save the lot or serial on every movement. Without it, you cannot trace a recall.
VI: Lưu số lô hoặc serial trên mọi dòng biến động, nếu không sẽ không truy xuất được khi thu hồi.`,questions:[{id:"inventory.lots-serials.1",kind:"compare",difficulty:"easy",prompt:`A shop sells phones with a 12-month warranty per phone. Which tracking fits best?
VI: Một cửa hàng bán điện thoại, bảo hành 12 tháng cho từng máy. Cách theo dõi nào phù hợp nhất?`,choices:["A serial number per phone","A lot number per delivery"],answer:0,why:`Warranty is per unit, so each phone needs its own number. A lot only tells you the delivery, not which phone.
VI: Bảo hành tính theo từng máy, nên mỗi máy cần một số riêng. Số lô chỉ cho biết lô hàng, không cho biết máy nào.`},{id:"inventory.lots-serials.2",kind:"scenario",difficulty:"medium",prompt:`A pharmacy chain must recall lot L2405. Issue documents saved item and quantity, but not the lot. What can the team do?
VI: Một chuỗi nhà thuốc phải thu hồi lô L2405. Phiếu xuất chỉ lưu mã hàng và số lượng, không lưu số lô. Đội ngũ có thể làm gì?`,choices:["Contact every customer who bought the item in that period","Query the movements by lot to get the exact customer list","Rebuild the lot of each issue from the expiry date","Use the item master to find which lot each customer got"],answer:0,why:`Without the lot on the issue, the link is lost. The only safe move is a wide recall. That costs far more than scanning lots each day.
VI: Không có số lô trên phiếu xuất thì mất liên kết. Cách an toàn duy nhất là thu hồi diện rộng. Việc này tốn kém hơn nhiều so với quét số lô mỗi ngày.`},{id:"inventory.lots-serials.3",kind:"truefalse",difficulty:"medium",prompt:`For items with lots, a movement only needs item, bin and quantity. The lot can be filled in later.
VI: Với hàng quản lý theo lô, dòng biến động chỉ cần mã hàng, ô kệ và số lượng. Số lô có thể điền sau.`,choices:["True","False"],answer:1,why:`Later, nobody knows which lot was really used. Capture the lot at the moment of the movement, best by scan.
VI: Để sau thì không ai còn biết đã dùng lô nào. Phải ghi số lô ngay lúc nhập xuất, tốt nhất là bằng quét mã.`},{id:"inventory.lots-serials.4",kind:"debug",difficulty:"hard",prompt:`A customer receives yogurt that expired last week. The warehouse uses FEFO picking. What is the most likely gap?
VI: Khách nhận sữa chua đã hết hạn từ tuần trước. Kho đang lấy hàng theo FEFO. Lỗ hổng khả dĩ nhất là gì?`,choices:["Picking sorts by expiry but does not block expired lots","The unit conversion rounded the picked quantity","The yogurt had no serial number on each cup","The stock was reserved when added to the cart"],answer:0,why:`FEFO picks the earliest expiry first, even when it has already passed. The system must also block expired lots. Or it can move them to a hold bin.
VI: FEFO lấy lô hết hạn sớm nhất trước, kể cả khi lô đó đã quá hạn. Hệ thống phải chặn lô hết hạn, hoặc chuyển chúng sang ô hàng chờ xử lý.`}]},{id:"inventory.stocktake",title:"Stocktake and cycle counting · Kiểm kê và kiểm kê xoay vòng",summary:`Compare the shelf with the system, then fix the difference with a reason.
VI: So sánh hàng trên kệ với hệ thống, rồi điều chỉnh chênh lệch kèm lý do.`,minutes:10,level:"practical",blocks:[{type:"text",text:`In this lesson you learn how to check stock against the shelf.
VI: Trong bài này, bạn học cách đối chiếu tồn kho với hàng thật trên kệ.
The system says 48. The shelf has 45. Goods get broken, stolen, picked wrong or scanned wrong. A **stocktake** (kiểm kê) counts the real stock. It compares the count with the system.
VI: Hệ thống báo 48, trên kệ chỉ có 45. Hàng có thể bị vỡ, mất trộm, lấy nhầm hoặc quét nhầm. **Kiểm kê** là đếm hàng thật trong kho và so với hệ thống.
The gap between the two numbers is the **variance** (chênh lệch). Variance = counted − system. Here: 45 − 48 = −3.
VI: Phần lệch giữa hai số là **chênh lệch** (variance). Chênh lệch = số đếm − số hệ thống. Ở đây: 45 − 48 = −3.`},{type:"visual",svg:`<svg viewBox="0 0 360 214"><defs><marker id="u7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-warn" x="8" y="8" width="344" height="30" rx="6"/><text class="v-small" x="180" y="27" text-anchor="middle">Freeze bin while counting</text>
<line class="v-line" x1="180" y1="38" x2="180" y2="56" marker-end="url(#u7)"/>
<rect class="v-box" x="8" y="58" width="100" height="56" rx="8"/><text class="v-muted v-small" x="58" y="78" text-anchor="middle">System</text><text class="v-title" x="58" y="100" text-anchor="middle">48</text>
<text class="v-muted v-small" x="119" y="90" text-anchor="middle">vs</text>
<rect class="v-box" x="130" y="58" width="100" height="56" rx="8"/><text class="v-muted v-small" x="180" y="78" text-anchor="middle">Counted</text><text class="v-title" x="180" y="100" text-anchor="middle">45</text>
<line class="v-line" x1="230" y1="86" x2="250" y2="86" marker-end="url(#u7)"/>
<rect class="v-bad" x="252" y="58" width="100" height="56" rx="8"/><text class="v-muted v-small" x="302" y="78" text-anchor="middle">Variance</text><text class="v-bad-text v-title" x="302" y="100" text-anchor="middle">-3</text>
<line class="v-line" x1="302" y1="114" x2="302" y2="142" marker-end="url(#u7)"/>
<rect class="v-accent" x="172" y="144" width="180" height="52" rx="8"/><text class="v-title v-small" x="262" y="165" text-anchor="middle">Adjustment DC-009</text><text class="v-small" x="262" y="183" text-anchor="middle">-3, reason: broken</text>
<text class="v-muted v-small" x="8" y="166">Never overwrite</text><text class="v-muted v-small" x="8" y="182">the stock number.</text></svg>`,alt:"A bin is frozen. The system quantity 48 is compared with the counted quantity 45. The variance of minus 3 becomes an adjustment document. Its reason is broken.",caption:`Variance = counted minus system. Post it as an adjustment.
VI: Chênh lệch = số đếm trừ số hệ thống. Ghi bằng phiếu điều chỉnh.`},{type:"text",text:`The steps below follow one **count session** (đợt kiểm kê). Each step keeps the count honest.
VI: Các bước dưới đây theo một **đợt kiểm kê** (count session). Mỗi bước giúp kết quả đếm đáng tin.`},{type:"diagram",text:`1. Freeze bin    stop moves in this bin
2. Snapshot      system qty  = 48
3. Count         counted qty = 45
4. Variance      45 - 48     = -3
5. Review        recount if big
6. Adjust        DC-009: -3 "broken"
7. Unfreeze      moves allowed again`},{type:"text",text:`Why freeze the bin? If a picker takes 2 units during the count, the stock changes. The counter and the system then see two different moments.
VI: Vì sao phải khóa ô kệ? Nếu có người lấy 2 cái trong lúc đếm, người đếm và hệ thống nhìn ở hai thời điểm khác nhau.
Then the variance is wrong. Freezing stops moves in that bin until the count is done and posted.
VI: Khi đó chênh lệch sẽ sai. Khóa ô kệ là dừng mọi lần nhập xuất ở ô đó cho tới khi đếm xong và ghi sổ.`},{type:"visual",svg:`<svg viewBox="0 0 360 200">
<text class="v-muted v-small" x="20" y="16">System: 200</text>
<rect class="v-box" x="20" y="22" width="320" height="28" rx="6"/>
<text class="v-muted v-small" x="20" y="68">Count 1: 188, off 6%</text>
<rect class="v-bad" x="20" y="74" width="300.8" height="28" rx="6"/>
<text class="v-muted v-small" x="20" y="120">Recount: 198, off 1%</text>
<rect class="v-good" x="20" y="126" width="316.8" height="28" rx="6"/>
<line class="v-line" x1="324" y1="14" x2="324" y2="164"/>
<text class="v-small" x="340" y="180" text-anchor="end">Limit: 190 (5% off)</text>
<text class="v-title" x="20" y="196">Post -2, not -12.</text></svg>`,alt:"Three bars on one scale. The system shows 200. The first count is 188. That is 6% low, past the 5% limit. The recount is 198, which is 1% low. Post the difference of minus 2.",caption:`Past the limit, count again. Post the recount, not the first count.
VI: Vượt ngưỡng thì đếm lại. Ghi kết quả đếm lại, không ghi lần đếm đầu.`},{type:"example",title:"A recount rule, with numbers",text:`Example rule: recount if the variance is more than 5%. Each business sets its own limit.
VI: Quy tắc ví dụ: đếm lại nếu chênh lệch quá 5%. Mỗi doanh nghiệp tự đặt giới hạn riêng.
System 200, counted 188. Variance −12, which is 12 ÷ 200 = 6%. Too high, so recount.
VI: Hệ thống 200, đếm được 188. Chênh lệch −12, tức 12 ÷ 200 = 6%. Quá cao, nên phải đếm lại.
Recount gives 198. Variance −2, which is 2 ÷ 200 = 1%. Post −2, not −12.
VI: Đếm lại được 198. Chênh lệch −2, tức 2 ÷ 200 = 1%. Ghi −2, không ghi −12.`},{type:"text",text:`Good systems hide the system quantity from the counter. If counters see "48", they tend to write 48. This is called a **blind count** (kiểm kê mù).
VI: Hệ thống tốt sẽ ẩn số tồn trên máy với người đếm. Nếu thấy "48", người đếm dễ ghi luôn 48. Cách này gọi là **kiểm kê mù** (blind count).`},{type:"text",text:`A full stocktake stops the whole warehouse, often once a year. **Cycle counting** (kiểm kê xoay vòng) counts a few bins every day instead.
VI: Kiểm kê toàn bộ phải dừng cả kho, thường mỗi năm một lần. **Kiểm kê xoay vòng** (cycle counting) đếm một ít ô kệ mỗi ngày.
The **ABC class** (phân loại ABC) ranks items by value. Class A is a few high-value items. Class C is many low-value items.
VI: **Phân loại ABC** xếp hàng theo giá trị. Nhóm A là ít mặt hàng giá trị cao. Nhóm C là nhiều mặt hàng giá trị thấp.`},{type:"diagram",text:`Class  Items  Share of value  Count
A      few    large           monthly
B      some   medium          quarterly
C      many   small           yearly
(frequencies are examples only)`},{type:"text",text:"IT side: tables like `CountSession` and `CountLine` hold the count. Each row has bin, item, lot, system qty and counted qty. Status: Draft → Counting → Review → Posted.\nVI: Phía IT: các bảng như `CountSession` và `CountLine` (ô kệ, mã hàng, lô, số hệ thống, số đếm). Trạng thái: Nháp → Đang đếm → Xem xét → Đã ghi sổ.\nAsk the business: which reason codes exist? Who approves? How big a variance needs a recount?\nVI: Hỏi nghiệp vụ: có những mã lý do nào? Ai duyệt? Chênh lệch bao nhiêu thì phải đếm lại?"},{type:"exercise",title:`Check a count against the 5% rule
VI: Kiểm tra một lần đếm theo quy tắc 5%`,task:`The system shows 150 units in a bin. The counter writes 147. Each unit costs 40,000 VND. Find the variance in units and as a percent. With a 5% limit, must the shop recount? Then find the value of the variance.
VI: Hệ thống ghi 150 cái trong một ô. Người đếm ghi 147. Mỗi cái giá 40.000đ. Tính chênh lệch theo số cái và theo phần trăm. Với giới hạn 5%, cửa hàng có phải đếm lại không? Sau đó tính giá trị chênh lệch.`,hint:`Variance = counted − system. Percent = variance ÷ system quantity × 100. Compare the percent with the limit.
VI: Chênh lệch = số đếm − số hệ thống. Phần trăm = chênh lệch ÷ số hệ thống × 100. So phần trăm với giới hạn.`,solution:`Variance: 147 − 150 = −3 units. Percent: 3 ÷ 150 × 100 = 2%. Since 2% is under 5%, no recount: post −3. Value: 3 × 40,000 = 120,000 VND. Answer: −3 units (2%), no recount, value 120,000 VND.
VI: Chênh lệch: 147 − 150 = −3 cái. Phần trăm: 3 ÷ 150 × 100 = 2%. Vì 2% thấp hơn 5%, không cần đếm lại: ghi −3. Giá trị: 3 × 40.000 = 120.000đ. Đáp số: −3 cái (2%), không đếm lại, giá trị 120.000đ.`},{type:"text",text:`Common mistake: posting the first count at once. A tired counter can cause a false loss of 12 units. At 25,000 VND each, that is a false loss of 300,000 VND.
VI: Lỗi thường gặp: ghi sổ ngay lần đếm đầu. Một người đếm mệt có thể làm lệch 12 cái. Mỗi cái 25.000đ, tức là 300.000đ bị ghi nhầm là mất.
A recount rule catches this error before it reaches the books.
VI: Quy tắc đếm lại sẽ bắt được lỗi này trước khi vào sổ.`}],remember:`Count against a frozen snapshot. Post the difference as an adjustment with a reason.
VI: Đếm so với số chốt lúc khóa kho. Ghi phần chênh lệch bằng phiếu điều chỉnh có lý do.`,questions:[{id:"inventory.stocktake.1",kind:"mcq",difficulty:"easy",prompt:`What should the system post after this count?
VI: Sau lần đếm này, hệ thống nên ghi sổ gì?`,code:{lang:"text",text:`System qty:  120
Counted qty: 114`},choices:["−6, with a reason","+6, with a reason","Set quantity to 114","Nothing, recount forever"],answer:0,why:`Variance = 114 − 120 = −6. Post it as an adjustment with a reason, so the history stays complete.
VI: Chênh lệch = 114 − 120 = −6. Ghi bằng phiếu điều chỉnh có lý do để lịch sử được đầy đủ.`},{id:"inventory.stocktake.2",kind:"debug",difficulty:"medium",prompt:`During a count, pickers kept taking stock from the bin. After the adjustment, stock is wrong again the next day. What went wrong?
VI: Trong lúc kiểm kê, người lấy hàng vẫn lấy hàng từ ô kệ đó. Sau khi điều chỉnh, ngày hôm sau tồn lại sai. Lỗi ở đâu?`,choices:["Picks during the count were not frozen or handled","The counter could not see the system quantity","The item was in ABC class C, not class A",'The adjustment used the reason code "lost"'],answer:0,why:`The count and the snapshot were taken at different moments. Freeze the bin. Or add the picks made during the count to the snapshot.
VI: Số đếm và số chốt trên hệ thống ở hai thời điểm khác nhau. Hãy khóa ô kệ, hoặc tính các lần lấy hàng trong lúc đếm vào số chốt.`},{id:"inventory.stocktake.3",kind:"scenario",difficulty:"medium",prompt:`A warehouse cannot stop for 2 days each year. Stock errors are found too late. What do you suggest?
VI: Kho không thể dừng hoạt động 2 ngày mỗi năm. Sai lệch tồn kho bị phát hiện quá muộn. Bạn đề xuất gì?`,choices:["Cycle counts: a few bins daily, A items more often","A full stocktake every month on Sunday nights","Trust the system and stop counting at all","Count an item only when a customer complains"],answer:0,why:`Cycle counting spreads the work over the year without stopping the warehouse. Valuable A items get counted most, where errors cost most.
VI: Kiểm kê xoay vòng chia nhỏ việc đếm trong năm mà không phải dừng kho. Hàng nhóm A giá trị cao được đếm nhiều nhất, vì sai lệch ở đó tốn kém nhất.`},{id:"inventory.stocktake.4",kind:"truefalse",difficulty:"medium",prompt:`Showing the system quantity to the counter makes the count more accurate.
VI: Cho người đếm thấy số tồn trên hệ thống sẽ giúp kết quả kiểm kê chính xác hơn.`,choices:["True","False"],answer:1,why:`Counters tend to copy the number they see. A blind count forces a real count.
VI: Người đếm dễ chép lại con số họ nhìn thấy. Kiểm kê mù buộc họ phải đếm thật.`},{id:"inventory.stocktake.5",kind:"compare",difficulty:"hard",prompt:`The count shows a variance of −3. Which way of fixing stock is better?
VI: Kết quả kiểm kê chênh lệch −3. Cách sửa tồn kho nào tốt hơn?`,choices:["Post an adjustment of −3 with a reason and an approver","Run `UPDATE StockBalance SET OnHand = 45` directly"],answer:0,why:`A direct update leaves no movement, no reason and no approver. The ledger and the balance then disagree.
VI: Sửa thẳng trong cơ sở dữ liệu không để lại dòng biến động, lý do hay người duyệt. Khi đó sổ biến động và bảng số dư sẽ lệch nhau.`}]},{id:"inventory.available",title:"On hand, reserved, available · Tồn thực tế, đã giữ, khả dụng",summary:`Not all stock on the shelf can still be sold.
VI: Không phải hàng nào trên kệ cũng còn bán được.`,minutes:12,level:"expert",blocks:[{type:"text",text:`In this lesson you learn why some shelf stock cannot be sold.
VI: Trong bài này, bạn học vì sao có hàng trên kệ mà vẫn không bán được.
**On hand** (tồn thực tế) is what is really in the warehouse. **Reserved** (đã giữ) is stock promised to orders but not shipped yet.
VI: **Tồn thực tế** (on hand) là hàng đang thật sự nằm trong kho. **Đã giữ** (reserved) là hàng đã hứa cho đơn nhưng chưa xuất.
**Available** (tồn khả dụng) = on hand − reserved. This is what you can still sell now.
VI: **Tồn khả dụng** (available) = tồn thực tế − đã giữ. Đây là số còn bán được ngay bây giờ.
**Incoming** (hàng đang về) is stock on purchase orders. It has not been received yet. It is not in the warehouse, so it cannot be sold now.
VI: **Hàng đang về** (incoming) là hàng có trên đơn mua nhưng chưa nhập kho. Hàng này chưa nằm trong kho, nên chưa bán được ngay.`},{type:"visual",svg:`<svg viewBox="0 0 360 190"><defs><marker id="u3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<text class="v-title" x="180" y="20" text-anchor="middle">On hand 10</text><line class="v-line" x1="30" y1="30" x2="330" y2="30"/>
<rect class="v-warn" x="30" y="40" width="210" height="40" rx="6"/><text class="v-small" x="135" y="65" text-anchor="middle">Reserved 7</text>
<rect class="v-good" x="240" y="40" width="90" height="40" rx="6"/><text class="v-small" x="285" y="65" text-anchor="middle">Available 3</text>
<text class="v-muted v-small" x="180" y="112" text-anchor="middle">Can we promise 15/04?</text>
<rect class="v-good" x="30" y="124" width="70" height="40" rx="6"/><text class="v-small" x="65" y="149" text-anchor="middle">3 now</text>
<text class="v-title" x="116" y="150" text-anchor="middle">+</text>
<rect class="v-accent" x="132" y="124" width="112" height="40" rx="6"/><text class="v-small" x="188" y="149" text-anchor="middle">20 from PO</text>
<text class="v-title" x="260" y="150" text-anchor="middle">=</text>
<rect class="v-solid" x="276" y="124" width="54" height="40" rx="6"/><text class="v-on-solid v-title" x="303" y="149" text-anchor="middle">23</text>
<text class="v-muted v-small" x="180" y="184" text-anchor="middle">Sell from available only.</text></svg>`,alt:"A bar shows 10 units on hand. 7 are reserved and 3 are available. Below it, 3 available plus 20 incoming from a purchase order gives 23. These 23 can be promised on 15 April.",caption:`Reserved stock is still on the shelf but not for sale.
VI: Hàng đã giữ vẫn nằm trên kệ nhưng không còn để bán.`},{type:"diagram",text:`Laptop X1 · Warehouse HCM
┌───────────┬──────┐
│ On hand   │   10 │ in the warehouse
│ Reserved  │  - 7 │ orders not shipped
├───────────┼──────┤
│ Available │    3 │ can sell now
│ Incoming  │ + 20 │ PO due 15/04
└───────────┴──────┘
ATP on 15/04 = 3 + 20 = 23`},{type:"text",text:`**Available to promise** (ATP, có thể hứa giao) answers one question. Can we promise a quantity on a date? It adds incoming stock due by that date.
VI: **Có thể hứa giao** (ATP) trả lời câu hỏi: có hứa giao được số lượng này vào ngày đó không? ATP cộng hàng đang về trước ngày đó.
It also subtracts stock already promised to other orders. In the example, ATP on 15/04 = 3 + 20 = 23.
VI: ATP cũng trừ phần hàng đã hứa cho đơn khác. Trong ví dụ, ATP ngày 15/04 = 3 + 20 = 23.`},{type:"example",title:"Order life, with numbers",text:`Start: on hand 10, reserved 0, available 10. Each laptop costs 15,000,000 VND. A customer orders 4 laptops.
VI: Bắt đầu: tồn thực tế 10, đã giữ 0, khả dụng 10. Mỗi máy giá vốn 15.000.000đ. Khách đặt 4 máy.
Reserved becomes 4, available 6, on hand still 10. The shop ships. Now on hand is 6, reserved 0, available 6.
VI: Đã giữ thành 4, khả dụng 6, tồn thực tế vẫn 10. Shop xuất hàng. Lúc này tồn thực tế 6, đã giữ 0, khả dụng 6.
The 4 shipped laptops are worth 4 × 15,000,000 = 60,000,000 VND at cost.
VI: 4 máy đã xuất trị giá 4 × 15.000.000 = 60.000.000đ theo giá vốn.`},{type:"visual",svg:`<svg viewBox="0 0 360 200">
<text class="v-muted v-small" x="20" y="16">Start: available 10</text>
<rect class="v-good" x="20" y="22" width="28" height="26" rx="4"/><rect class="v-good" x="52" y="22" width="28" height="26" rx="4"/><rect class="v-good" x="84" y="22" width="28" height="26" rx="4"/><rect class="v-good" x="116" y="22" width="28" height="26" rx="4"/><rect class="v-good" x="148" y="22" width="28" height="26" rx="4"/><rect class="v-good" x="180" y="22" width="28" height="26" rx="4"/><rect class="v-good" x="212" y="22" width="28" height="26" rx="4"/><rect class="v-good" x="244" y="22" width="28" height="26" rx="4"/><rect class="v-good" x="276" y="22" width="28" height="26" rx="4"/><rect class="v-good" x="308" y="22" width="28" height="26" rx="4"/>
<text class="v-muted v-small" x="20" y="76">Order 4: reserved 4</text>
<rect class="v-warn" x="20" y="82" width="28" height="26" rx="4"/><rect class="v-warn" x="52" y="82" width="28" height="26" rx="4"/><rect class="v-warn" x="84" y="82" width="28" height="26" rx="4"/><rect class="v-warn" x="116" y="82" width="28" height="26" rx="4"/><rect class="v-good" x="148" y="82" width="28" height="26" rx="4"/><rect class="v-good" x="180" y="82" width="28" height="26" rx="4"/><rect class="v-good" x="212" y="82" width="28" height="26" rx="4"/><rect class="v-good" x="244" y="82" width="28" height="26" rx="4"/><rect class="v-good" x="276" y="82" width="28" height="26" rx="4"/><rect class="v-good" x="308" y="82" width="28" height="26" rx="4"/>
<text class="v-muted v-small" x="20" y="136">Ship 4: on hand 6</text>
<rect class="v-good" x="20" y="142" width="28" height="26" rx="4"/><rect class="v-good" x="52" y="142" width="28" height="26" rx="4"/><rect class="v-good" x="84" y="142" width="28" height="26" rx="4"/><rect class="v-good" x="116" y="142" width="28" height="26" rx="4"/><rect class="v-good" x="148" y="142" width="28" height="26" rx="4"/><rect class="v-good" x="180" y="142" width="28" height="26" rx="4"/><rect class="v-soft" x="212" y="142" width="28" height="26" rx="4"/><rect class="v-soft" x="244" y="142" width="28" height="26" rx="4"/><rect class="v-soft" x="276" y="142" width="28" height="26" rx="4"/><rect class="v-soft" x="308" y="142" width="28" height="26" rx="4"/>
<text class="v-muted v-small" x="20" y="190">Each box is one laptop.</text></svg>`,alt:"Ten laptop boxes in three rows. At the start all ten are available. An order of 4 reserves four, leaving six available. After shipping, six remain on hand, and all six are available.",caption:`Shipping removes units from both on hand and reserved.
VI: Xuất hàng làm giảm cả tồn thực tế lẫn số đã giữ.`},{type:"text",text:`Ask the business: when is stock reserved? At the cart, at the order, or at payment? When does a reservation expire?
VI: Hỏi nghiệp vụ: khi nào thì giữ hàng? Khi thêm vào giỏ, khi đặt đơn, hay khi thanh toán? Bao lâu thì hết hạn giữ?
Can sales promise incoming stock, and how late can the PO be?
VI: Kinh doanh có được hứa giao hàng đang về không, và đơn mua có thể trễ tới đâu?`},{type:"text",text:`This is a **race condition** (tranh chấp đồng thời). Two requests read the same value. Then both act on it. Each one thinks the stock is still there.
VI: Đây là **tranh chấp đồng thời** (race condition): hai yêu cầu cùng đọc một giá trị rồi cùng hành động. Mỗi bên đều nghĩ hàng vẫn còn.
Example: one laptop is left. Order A and order B both read available = 1. Both reserve 1.
VI: Ví dụ: còn đúng một máy. Đơn A và đơn B cùng đọc khả dụng = 1. Cả hai đều giữ 1.
Reserved is now 2, but on hand is only 1. One customer gets nothing.
VI: Đã giữ lúc này là 2, nhưng tồn thực tế chỉ có 1. Một khách sẽ không nhận được máy.`},{type:"diagram",text:`Available = 1 (the last laptop)
 Order A                 Order B
 read available → 1      read available → 1
 1 ≥ 1, OK               1 ≥ 1, OK
 reserve 1               reserve 1
   │                       │
   └────► Reserved = 2 ◄───┘
   On hand = 1 → one customer gets nothing`},{type:"text",text:`In a flash sale of 100 phones, many buyers click at once. Without a safe check, the system may accept 130 orders.
VI: Trong một đợt flash sale 100 điện thoại, nhiều người bấm mua cùng lúc. Nếu không kiểm tra an toàn, hệ thống có thể nhận 130 đơn.
Tests with one user never show this problem. So test with many users at once.
VI: Kiểm thử với một người dùng sẽ không bao giờ thấy lỗi này, nên hãy kiểm thử với nhiều người dùng cùng lúc.`},{type:"text",text:`Fix: check and reserve in one **atomic** step (bước nguyên tử). Atomic means it cannot be split into two parts.
VI: Cách sửa: kiểm tra và giữ hàng trong một bước **nguyên tử** (atomic), tức là không thể bị tách thành hai phần.
The database locks the row while the UPDATE runs. The check and the change happen together.
VI: Cơ sở dữ liệu khóa dòng trong lúc câu lệnh UPDATE chạy. Kiểm tra và thay đổi xảy ra cùng lúc.`},{type:"code",code:{lang:"sql",text:`-- Check and reserve in ONE statement
UPDATE StockBalance
SET    Reserved = Reserved + @qty
WHERE  ItemId = @item
  AND  WarehouseId = @wh
  AND  OnHand - Reserved >= @qty;
-- 0 rows updated → not enough stock`}},{type:"text",text:`Reserving at the cart blocks stock for buyers who may never pay. Such holds need an expiry time. The business sets that time.
VI: Giữ hàng ngay khi vào giỏ sẽ chặn hàng của những người có thể không bao giờ thanh toán. Các lần giữ này cần có thời hạn hết hiệu lực. Nghiệp vụ sẽ đặt thời hạn đó.
Common mistake: the web shop shows on hand as "in stock". With on hand 10 and reserved 7, it sells 10.
VI: Lỗi thường gặp: web bán hàng hiển thị tồn thực tế là "còn hàng". Tồn thực tế 10, đã giữ 7, mà vẫn bán 10.
Then 7 customers wait for units that the shop does not have.
VI: Khi đó 7 khách phải chờ những cái mà cửa hàng không có.`},{type:"exercise",title:`Can we promise 20 units next week?
VI: Có hứa được 20 cái vào tuần sau không?`,task:`A shop has 50 units on hand. Orders have reserved 35 of them. A purchase order of 40 units is due next week. A customer asks for 20 units next week. Can the shop promise them? Then answer again if the 40 units arrive 2 weeks late.
VI: Một cửa hàng có 50 cái tồn thực tế. Các đơn đã giữ 35 cái. Một đơn mua 40 cái sẽ về vào tuần sau. Khách hỏi giao 20 cái vào tuần sau. Cửa hàng có hứa được không? Sau đó trả lời lại nếu 40 cái về trễ 2 tuần.`,hint:`Available now = on hand − reserved. ATP next week = available + incoming due by next week.
VI: Khả dụng hiện tại = tồn thực tế − đã giữ. ATP tuần sau = khả dụng + hàng đang về trước tuần sau.`,solution:`Available now: 50 − 35 = 15. ATP next week: 15 + 40 = 55. That is at least 20, so yes. If the 40 units arrive 2 weeks late, ATP next week stays 15. That is less than 20, so no. Answer: yes if on time, no if late.
VI: Khả dụng hiện tại: 50 − 35 = 15. ATP tuần sau: 15 + 40 = 55, lớn hơn 20, nên được. Nếu 40 cái về trễ 2 tuần, ATP tuần sau vẫn là 15, nhỏ hơn 20, nên không được. Đáp số: đúng hạn thì hứa được, về trễ thì không.`},{type:"text",text:`Common mistake: reading the number, then saving the change in a second step. Two requests can both pass the check.
VI: Lỗi thường gặp: đọc số trước, rồi lưu thay đổi ở bước sau. Hai yêu cầu có thể cùng qua bước kiểm tra.
The fix is one atomic statement. Or use a row lock that holds until the save is done.
VI: Cách sửa là một câu lệnh nguyên tử, hoặc khóa dòng cho tới khi lưu xong.`}],remember:`Sell from available, not on hand. Check and reserve in one atomic step.
VI: Bán theo tồn khả dụng, không theo tồn thực tế. Kiểm tra và giữ hàng trong một bước nguyên tử.`,questions:[{id:"inventory.available.1",kind:"mcq",difficulty:"easy",prompt:`A customer wants units today. How many can you sell from stock right now?
VI: Khách cần hàng ngay hôm nay. Hiện tại bạn bán được tối đa bao nhiêu từ tồn kho?`,code:{lang:"text",text:`On hand:                    50
Reserved:                   35
Incoming (PO due next week): 40`},choices:["15","50","55","90"],answer:0,why:`Available = 50 − 35 = 15. The 35 units belong to other orders. Incoming stock is not here yet.
VI: Khả dụng = 50 − 35 = 15. 35 cái đã thuộc về đơn khác. Hàng đang về thì chưa có trong kho.`},{id:"inventory.available.2",kind:"debug",difficulty:"medium",prompt:`Only one unit was left, but two customers both got "Order confirmed". What is the cause in this code?
VI: Chỉ còn một cái, nhưng cả hai khách đều nhận "Đặt hàng thành công". Nguyên nhân trong đoạn code này là gì?`,code:{lang:"ts",text:`const bal = await repo.getBalance(item);
if (bal.onHand - bal.reserved >= qty) {
  bal.reserved += qty;
  await repo.save(bal);
}`},choices:["A race between the read and the save","The formula forgot incoming stock","A missing index on the ItemId column","The qty is in the wrong unit of measure"],answer:0,why:`Both requests read reserved = 0 before either one saves. Both pass the check. The check and the update must be one atomic step.
VI: Cả hai yêu cầu đều đọc reserved = 0 trước khi bên nào kịp lưu. Cả hai đều qua bước kiểm tra. Kiểm tra và cập nhật phải là một bước duy nhất.`},{id:"inventory.available.3",kind:"compare",difficulty:"medium",prompt:`Which way of reserving stock is safe when many users order at once?
VI: Cách giữ hàng nào an toàn khi nhiều người đặt cùng lúc?`,choices:["Read available in the app, then save the new Reserved","One UPDATE with the stock check inside its WHERE"],answer:1,why:`The database locks the row while it runs the UPDATE. So the check and the change happen together. Then check how many rows were updated.
VI: Cơ sở dữ liệu khóa dòng khi chạy UPDATE, nên kiểm tra và thay đổi xảy ra cùng lúc. Sau đó kiểm tra số dòng đã được cập nhật.`},{id:"inventory.available.4",kind:"scenario",difficulty:"hard",prompt:`Sales wants to promise 30 units for next Friday. Available today is 10. A PO for 25 arrives Wednesday. 5 units of that PO are already promised. Can sales promise 30?
VI: Kinh doanh muốn hứa giao 30 cái vào thứ Sáu tới. Hôm nay khả dụng là 10. Một đơn mua 25 cái về vào thứ Tư. 5 cái trong đó đã hứa cho đơn khác. Có hứa được 30 không?`,choices:["Yes, ATP by Friday is 30","No, only 10 are available today","Yes, ATP by Friday is 35","No, ATP by Friday is 25"],answer:0,why:`ATP = 10 + 25 − 5 = 30. But the PO can be late. So ask how much risk sales may take.
VI: ATP = 10 + 25 − 5 = 30. Nhưng hàng có thể về trễ, nên cần hỏi kinh doanh được chấp nhận rủi ro tới đâu.`},{id:"inventory.available.5",kind:"scenario",difficulty:"medium",prompt:`Stock is reserved when a customer adds an item to the cart. Many customers leave without paying. What problem appears?
VI: Hàng được giữ ngay khi khách thêm vào giỏ. Nhiều khách bỏ đi mà không thanh toán. Vấn đề gì sẽ xảy ra?`,choices:['Old carts hold stock, so real buyers see "sold out"',"On hand drops below zero for items in old carts","Incoming stock is counted twice in the ATP","Nothing, because carts never touch stock data"],answer:0,why:`Reservations from abandoned carts block real sales. Add an expiry time, or reserve only at order or payment.
VI: Hàng bị giữ bởi giỏ bỏ dở sẽ chặn khách mua thật. Cần đặt thời hạn giữ hàng, hoặc chỉ giữ khi đặt đơn hay thanh toán.`}]},{id:"inventory.valuation",title:"Inventory valuation · Tính giá trị tồn kho",summary:`Same goods, different cost method, different profit.
VI: Cùng hàng hóa, khác phương pháp tính giá vốn thì khác lợi nhuận.`,minutes:12,level:"expert",blocks:[{type:"text",text:`In this lesson you learn how the cost method changes profit.
VI: Trong bài này, bạn học cách phương pháp tính giá làm thay đổi lợi nhuận.
Stock is also money. When you sell goods, their cost moves from the stock account to an expense. This expense is called **cost of goods sold** (COGS, giá vốn hàng bán).
VI: Tồn kho cũng là tiền. Khi bán hàng, giá vốn của hàng đó chuyển từ tài khoản tồn kho sang chi phí gọi là **giá vốn hàng bán** (COGS).
Shops often buy the same item at different prices. A **valuation method** (phương pháp tính giá xuất kho) is a rule. It decides which purchase price becomes the cost of each sale.
VI: Cửa hàng thường mua cùng một mặt hàng với nhiều giá khác nhau. **Phương pháp tính giá xuất kho** quyết định giá mua nào trở thành giá vốn của mỗi lần bán.`},{type:"visual",svg:`<svg viewBox="0 0 360 224"><text class="v-muted v-small" x="20" y="16">Stock before sale: 200</text>
<rect class="v-box" x="20" y="22" width="160" height="30" rx="4"/><text class="v-small" x="100" y="42" text-anchor="middle">100 × 10,000</text>
<rect class="v-warn" x="180" y="22" width="160" height="30" rx="4"/><text class="v-small" x="260" y="42" text-anchor="middle">100 × 12,000</text>
<text class="v-muted v-small" x="20" y="76">FIFO sells 150: oldest first</text>
<rect class="v-good" x="20" y="82" width="160" height="30" rx="4"/><text class="v-small" x="100" y="102" text-anchor="middle">100 × 10,000</text>
<rect class="v-good" x="180" y="82" width="80" height="30" rx="4"/><text class="v-small" x="220" y="102" text-anchor="middle">50 × 12,000</text>
<text class="v-title v-small" x="268" y="102">1,600,000</text>
<text class="v-muted v-small" x="20" y="136">Average sells 150: one price</text>
<rect class="v-accent" x="20" y="142" width="240" height="30" rx="4"/><text class="v-small" x="140" y="162" text-anchor="middle">150 × 11,000</text>
<text class="v-title v-small" x="268" y="162">1,650,000</text>
<text class="v-muted v-small" x="180" y="198" text-anchor="middle">Cost differs by 50,000.</text><text class="v-muted v-small" x="180" y="214" text-anchor="middle">Higher cost = lower profit.</text></svg>`,alt:"Two purchase layers of 100 notebooks, at 10,000 and 12,000. Selling 150 with FIFO costs 1,600,000. It uses 100 at 10,000 and 50 at 12,000. The weighted average uses 150 at 11,000, a cost of 1,650,000.",caption:`The method picks which price becomes the cost.
VI: Phương pháp tính giá chọn mức giá nào trở thành giá vốn.`},{type:"example",title:"A stationery shop",text:`A stationery shop buys 100 notebooks at 10,000 VND each. Later it buys 100 more at 12,000 VND each.
VI: Một cửa hàng văn phòng phẩm mua 100 quyển vở giá 10.000đ mỗi quyển. Sau đó mua thêm 100 quyển giá 12.000đ mỗi quyển.
It sells 150 notebooks at 20,000 VND each. What did those 150 notebooks cost?
VI: Cửa hàng bán 150 quyển giá 20.000đ mỗi quyển. Vậy 150 quyển đó có giá vốn là bao nhiêu?`},{type:"list",items:[`**FIFO** (nhập trước xuất trước): the oldest units go out first. Cost = 100 × 10,000 + 50 × 12,000 = 1,600,000 VND.
VI: Hàng nhập trước được xuất trước. Giá vốn = 100 × 10.000 + 50 × 12.000 = 1.600.000đ.`,`**Weighted average** (bình quân gia quyền): total value 2,200,000 ÷ 200 notebooks = 11,000 VND each. Cost = 150 × 11,000 = 1,650,000 VND.
VI: Giá bình quân = tổng giá trị 2.200.000đ ÷ 200 quyển = 11.000đ mỗi quyển. Giá vốn = 150 × 11.000 = 1.650.000đ.`]},{type:"diagram",text:`┌──────────────┬───────────┬───────────┐
│              │ FIFO      │ W. avg    │
├──────────────┼───────────┼───────────┤
│ COGS (150)   │ 1,600,000 │ 1,650,000 │
│ Stock (50)   │   600,000 │   550,000 │
│ Revenue      │ 3,000,000 │ 3,000,000 │
├──────────────┼───────────┼───────────┤
│ Gross profit │ 1,400,000 │ 1,350,000 │
└──────────────┴───────────┴───────────┘`},{type:"text",text:`Same sale, same cash, but profit differs by 50,000 VND. When prices rise, FIFO shows a lower cost and a higher profit.
VI: Cùng một lần bán, cùng số tiền thu, nhưng lợi nhuận lệch 50.000đ. Khi giá tăng, FIFO cho giá vốn thấp hơn và lợi nhuận cao hơn.
The method does not change cash in or out. It changes cost, so it changes profit and the value of stock left.
VI: Phương pháp này không làm thay đổi tiền thu vào hay chi ra. Nó thay đổi giá vốn, nên thay đổi lợi nhuận và giá trị hàng còn lại.`},{type:"visual",svg:`<svg viewBox="0 0 360 224"><text class="v-muted v-small" x="200" y="14" text-anchor="middle">Stock</text><text class="v-muted v-small" x="265" y="14" text-anchor="middle">Value</text><text class="v-muted v-small" x="325" y="14" text-anchor="middle">Avg</text>
<rect class="v-box" x="10" y="20" width="340" height="34" rx="6"/><text class="v-small" x="20" y="41">Buy 20 at 50</text><text class="v-title v-small" x="200" y="41" text-anchor="middle">20</text><text class="v-title v-small" x="265" y="41" text-anchor="middle">1,000</text><text class="v-title v-small" x="325" y="41" text-anchor="middle">50</text>
<rect class="v-soft" x="10" y="60" width="340" height="34" rx="6"/><text class="v-small" x="20" y="81">Sell 5: cost 250</text><text class="v-title v-small" x="200" y="81" text-anchor="middle">15</text><text class="v-title v-small" x="265" y="81" text-anchor="middle">750</text><text class="v-title v-small" x="325" y="81" text-anchor="middle">50</text>
<rect class="v-accent" x="10" y="100" width="340" height="34" rx="6"/><text class="v-small" x="20" y="121">Buy 10 at 80</text><text class="v-title v-small" x="200" y="121" text-anchor="middle">25</text><text class="v-title v-small" x="265" y="121" text-anchor="middle">1,550</text><text class="v-title v-small" x="325" y="121" text-anchor="middle">62</text>
<rect class="v-soft" x="10" y="140" width="340" height="34" rx="6"/><text class="v-small" x="20" y="161">Sell 10: cost 620</text><text class="v-title v-small" x="200" y="161" text-anchor="middle">15</text><text class="v-title v-small" x="265" y="161" text-anchor="middle">930</text><text class="v-title v-small" x="325" y="161" text-anchor="middle">62</text>
<text class="v-muted v-small" x="180" y="200" text-anchor="middle">Average = value ÷ stock</text><text class="v-muted v-small" x="180" y="216" text-anchor="middle">after each buy</text></svg>`,alt:"A table of four steps. Buy 20 at 50 gives stock 20, value 1,000, average 50. Selling 5 costs 250, leaving 15 units and 750. Buy 10 at 80 gives 25 units, value 1,550, average 62. Selling 10 costs 620, leaving 15 units and 930.",caption:`After each buy, the average is value divided by stock. Sales use that average.
VI: Sau mỗi lần mua, giá bình quân bằng giá trị chia số lượng. Lúc bán dùng giá đó.`},{type:"text",text:`**Moving average** (bình quân tức thời) recalculates the average after each receipt. Stock value and quantity change together.
VI: **Bình quân tức thời** (moving average) tính lại giá bình quân sau mỗi lần nhập. Giá trị và số lượng tồn cùng thay đổi.
Example: after buying 10 at 80, the average is 62. So selling 10 costs 620.
VI: Ví dụ: sau khi mua 10 cái giá 80, bình quân là 62, nên bán 10 cái có giá vốn 620.`},{type:"exercise",title:`Cost of a sale, two ways
VI: Giá vốn của một lần bán theo hai cách`,task:`On 1 Jan a shop buys 40 lamps at 25,000 VND each. On 10 Jan it buys 60 lamps at 30,000 VND each. On 15 Jan it sells 50 lamps. Find the cost of those 50 lamps under FIFO, then under weighted average. Then find the value of stock left under each method.
VI: Ngày 1/1 cửa hàng mua 40 bóng đèn giá 25.000đ mỗi cái. Ngày 10/1 mua 60 cái giá 30.000đ mỗi cái. Ngày 15/1 bán 50 cái. Tìm giá vốn của 50 cái theo FIFO, rồi theo bình quân gia quyền. Sau đó tìm giá trị tồn còn lại theo từng cách.`,hint:`FIFO uses the first 40 lamps, then 10 from the second batch. Weighted average = total cost ÷ total units.
VI: FIFO lấy 40 cái đầu, rồi 10 cái từ lô sau. Bình quân = tổng tiền ÷ tổng số cái.`,solution:`FIFO cost: 40 × 25,000 = 1,000,000; 10 × 30,000 = 300,000. Total: 1,300,000 VND. Average: total purchases 1,000,000 + 1,800,000 = 2,800,000 VND for 100 lamps. So the average is 28,000 each. Cost: 50 × 28,000 = 1,400,000 VND. Stock left is 50 lamps. FIFO left = 50 × 30,000 = 1,500,000 VND. Average left = 50 × 28,000 = 1,400,000 VND. Check: 1,300,000 + 1,500,000 = 2,800,000, the total bought.
VI: Giá vốn FIFO: 40 × 25.000 = 1.000.000; 10 × 30.000 = 300.000; tổng 1.300.000đ. Bình quân: tổng mua 1.000.000 + 1.800.000 = 2.800.000đ cho 100 cái, tức 28.000đ mỗi cái. Giá vốn: 50 × 28.000 = 1.400.000đ. Còn lại 50 cái. Theo FIFO: 50 × 30.000 = 1.500.000đ. Theo bình quân: 50 × 28.000 = 1.400.000đ. Kiểm tra: 1.300.000 + 1.500.000 = 2.800.000đ, bằng tổng đã mua.`},{type:"text",text:`IT side: the accountant chooses the method. It should stay the same over time. Average cost can be updated after each receipt (moving average). Or it can be updated once at month end (period average).
VI: Phía IT: kế toán chọn phương pháp, và phương pháp cần được áp dụng nhất quán theo thời gian. Giá bình quân có thể tính lại sau mỗi lần nhập (bình quân tức thời) hoặc một lần cuối tháng (bình quân cuối kỳ).
Save the unit cost on each issue movement. Keep enough decimals. A backdated receipt changes later costs, so the system must recalculate them.
VI: Lưu đơn giá vốn trên từng dòng xuất. Giữ đủ số lẻ. Phiếu nhập lùi ngày sẽ làm thay đổi giá vốn các lần xuất sau, nên hệ thống phải tính lại.`},{type:"text",text:`Common mistake: average the two purchase prices, (50 + 80) ÷ 2 = 65. This ignores the quantities.
VI: Lỗi thường gặp: lấy trung bình hai giá mua, (50 + 80) ÷ 2 = 65. Cách này bỏ qua số lượng.
Take 20 at 50 and 10 at 80. The right average is (20 × 50 + 10 × 80) ÷ 30 = 1,800 ÷ 30 = 60.
VI: Với 20 cái giá 50 và 10 cái giá 80, bình quân đúng là (20 × 50 + 10 × 80) ÷ 30 = 1.800 ÷ 30 = 60.`}],remember:`The valuation method decides cost of goods sold, so it decides profit. Accounting chooses it, and IT applies it exactly.
VI: Phương pháp tính giá quyết định giá vốn, nên quyết định lợi nhuận. Kế toán chọn phương pháp, IT áp dụng đúng như vậy.`,questions:[{id:"inventory.valuation.1",kind:"mcq",difficulty:"medium",prompt:`Using FIFO, what is the cost of goods sold for this sale?
VI: Theo FIFO, giá vốn của lần bán này là bao nhiêu?`,code:{lang:"text",text:`Buy   01/04  10 units × 100,000 VND
Buy   05/04  10 units × 130,000 VND
Sell  08/04  15 units`},choices:["1,650,000 VND","1,725,000 VND","1,950,000 VND","1,500,000 VND"],answer:0,why:`FIFO takes the first 10 at 100,000, then 5 at 130,000. Cost: 1,000,000 + 650,000 = 1,650,000 VND. 1,725,000 is the weighted average answer.
VI: FIFO lấy 10 cái đầu giá 100.000đ, rồi 5 cái giá 130.000đ: 1.000.000 + 650.000 = 1.650.000đ. Số 1.725.000đ là kết quả theo bình quân gia quyền.`},{id:"inventory.valuation.2",kind:"mcq",difficulty:"hard",prompt:`Same purchases and sale, but with weighted average. What is the value of the 5 units left in stock?
VI: Cùng các lần mua và bán đó, nhưng tính theo bình quân gia quyền. Giá trị 5 cái còn tồn là bao nhiêu?`,code:{lang:"text",text:`Buy   01/04  10 units × 100,000 VND
Buy   05/04  10 units × 130,000 VND
Sell  08/04  15 units`},choices:["575,000 VND","650,000 VND","500,000 VND","1,725,000 VND"],answer:0,why:`Average cost = (1,000,000 + 1,300,000) ÷ 20 = 115,000. Left = 5 × 115,000 = 575,000 VND. FIFO would give 650,000, because the last 5 units cost 130,000.
VI: Giá bình quân = (1.000.000 + 1.300.000) ÷ 20 = 115.000đ. Còn lại = 5 × 115.000 = 575.000đ. Theo FIFO sẽ là 650.000đ, vì 5 cái cuối giá 130.000đ.`},{id:"inventory.valuation.3",kind:"compare",difficulty:"medium",prompt:`Purchase prices rise every month. Which method usually shows the higher profit?
VI: Giá mua tăng đều mỗi tháng. Phương pháp nào thường cho lợi nhuận cao hơn?`,choices:["FIFO","Weighted average"],answer:0,why:`FIFO charges the older, cheaper units as cost. Lower cost means higher profit. The average mixes in the newer, higher prices.
VI: FIFO tính giá vốn bằng hàng cũ, giá rẻ hơn. Giá vốn thấp thì lợi nhuận cao. Bình quân thì trộn cả giá mới, cao hơn.`},{id:"inventory.valuation.4",kind:"debug",difficulty:"hard",prompt:`The accountant enters a late receipt dated 05/03. The COGS for March changes. Users report a bug. The system uses moving average. What is it?
VI: Kế toán nhập một phiếu nhập trễ, ghi ngày 05/03. Giá vốn tháng 3 thay đổi. Người dùng báo lỗi. Hệ thống dùng bình quân tức thời. Đây là gì?`,choices:["Expected: a backdated receipt changes the cost of later issues","A bug: COGS must never change once it has been calculated","A rounding error from storing quantity in the base unit","A race condition between two users reserving stock"],answer:0,why:`Each issue uses the average cost at its date. A receipt dated earlier changes that average, so the system recalculates. To stop this, the business can close (lock) the period.
VI: Mỗi phiếu xuất dùng giá bình quân tại ngày của nó. Phiếu nhập lùi ngày làm đổi giá bình quân, nên hệ thống tính lại. Muốn tránh, nghiệp vụ có thể khóa sổ kỳ đó.`},{id:"inventory.valuation.5",kind:"truefalse",difficulty:"easy",prompt:`Two shops have exactly the same purchases and sales. Still, they can report different profit, only because their valuation methods differ.
VI: Hai cửa hàng có cùng các lần mua và bán vẫn có thể báo lãi khác nhau, chỉ vì dùng phương pháp tính giá khác nhau.`,choices:["True","False"],answer:0,why:`The method changes cost of goods sold, so it changes profit. In the notebook example, FIFO and average differ by 50,000 VND.
VI: Phương pháp tính giá làm thay đổi giá vốn, nên làm thay đổi lợi nhuận. Trong ví dụ quyển vở, FIFO và bình quân lệch nhau 50.000đ.`}]}],cheatSheet:[{title:"Items, quantities and sales · Hàng hóa và số lượng",items:[{term:"Item master · Danh mục hàng hóa",meaning:`The list of all items, with code, name and units.
VI: Danh sách mọi mặt hàng, kèm mã, tên và đơn vị tính.`},{term:"SKU · Mã hàng",meaning:`One thing you count on its own, like red T-shirt size M.
VI: Một thứ được đếm tồn riêng, như áo đỏ size M.`},{term:"Base unit · Đơn vị gốc",meaning:`The smallest unit you count. All stock is saved in it.
VI: Đơn vị nhỏ nhất dùng để đếm. Mọi số tồn đều lưu theo đơn vị này.`},{term:"Conversion factor · Hệ số quy đổi",meaning:`How many base units one unit holds, like 1 carton = 24 cans.
VI: Một đơn vị chứa bao nhiêu đơn vị gốc, như 1 thùng = 24 lon.`},{term:"On hand · Tồn thực tế",meaning:`What is really in the warehouse.
VI: Hàng đang thật sự nằm trong kho.`},{term:"Reserved · Đã giữ",meaning:`Promised to orders, but not shipped yet.
VI: Đã hứa cho đơn hàng nhưng chưa xuất.`},{term:"Available · Tồn khả dụng",meaning:`On hand minus reserved. What you can sell now.
VI: Tồn thực tế trừ đã giữ. Số còn bán được ngay.`},{term:"Incoming · Hàng đang về",meaning:`On purchase orders, not received yet.
VI: Có trên đơn mua nhưng chưa nhập kho.`},{term:"ATP · Có thể hứa giao",meaning:`Available plus incoming by a date, minus what is already promised.
VI: Khả dụng cộng hàng về trước một ngày, trừ phần đã hứa.`}]},{title:"Movements and stock · Chứng từ và tồn kho",items:[{term:"Receipt · Phiếu nhập kho",meaning:`Goods come in. Quantity is plus.
VI: Hàng vào kho. Số lượng là số dương.`},{term:"Issue · Phiếu xuất kho",meaning:`Goods go out for a sale or production. Quantity is minus.
VI: Hàng ra khỏi kho để bán hoặc sản xuất. Số lượng là số âm.`},{term:"Transfer · Phiếu chuyển kho",meaning:`Minus in one place, plus in another.
VI: Trừ ở kho này, cộng ở kho kia.`},{term:"Adjustment · Phiếu điều chỉnh",meaning:`Fixes stock after a count or loss, with a reason.
VI: Sửa tồn sau kiểm kê hoặc mất mát, kèm lý do.`},{term:"Stock ledger · Sổ biến động kho",meaning:`All movements. Stock = SUM(Qty).
VI: Tất cả các dòng nhập xuất. Tồn kho = tổng số lượng.`},{term:"Negative stock · Tồn âm",meaning:`More goes out than the system shows. Allow or block is a business choice.
VI: Xuất nhiều hơn số tồn trên máy. Cho phép hay chặn là do nghiệp vụ quyết định.`},{term:"Race condition · Tranh chấp đồng thời",meaning:`Two orders take the last unit. Check and reserve in one step.
VI: Hai đơn cùng lấy cái cuối cùng. Kiểm tra và giữ hàng trong một bước.`}]},{title:"Locations and tracking · Vị trí và truy xuất",items:[{term:"Bin · Ô kệ",meaning:`One exact spot in a warehouse zone.
VI: Một vị trí cụ thể trong một khu của kho.`},{term:"Putaway · Cất hàng",meaning:`Move goods from the dock to a bin.
VI: Đưa hàng từ khu nhận hàng lên ô kệ.`},{term:"Pick list · Phiếu lấy hàng",meaning:`Item, bin and quantity to pick, sorted by route.
VI: Mã hàng, ô kệ và số lượng cần lấy, sắp theo đường đi.`},{term:"FIFO · Nhập trước xuất trước",meaning:`The oldest received goods go out first.
VI: Hàng nhập về sớm nhất được xuất trước.`},{term:"FEFO · Hết hạn trước xuất trước",meaning:`The earliest expiry goes out first.
VI: Hàng có hạn dùng sớm nhất được xuất trước.`},{term:"Lot · Số lô",meaning:`Many units made or received together share one number.
VI: Nhiều đơn vị sản xuất hoặc nhập cùng nhau có chung một số.`},{term:"Serial · Số serial",meaning:`One number for exactly one unit.
VI: Một số cho đúng một chiếc.`},{term:"Recall · Thu hồi",meaning:`Finding and calling back every unit from a bad lot.
VI: Tìm và thu lại mọi đơn vị thuộc lô bị lỗi.`}]},{title:"Value and counting · Giá trị và kiểm kê",items:[{term:"COGS · Giá vốn hàng bán",meaning:`The cost of the goods you sold.
VI: Giá trị vốn của số hàng đã bán.`},{term:"Weighted average · Bình quân gia quyền",meaning:`Total value divided by total quantity.
VI: Tổng giá trị chia cho tổng số lượng.`},{term:"Stocktake · Kiểm kê",meaning:`Count real stock and compare it with the system.
VI: Đếm hàng thật và so với số trên hệ thống.`},{term:"Variance · Chênh lệch",meaning:`Counted quantity minus system quantity.
VI: Số đếm thực tế trừ số trên hệ thống.`},{term:"Blind count · Kiểm kê mù",meaning:`The counter does not see the system quantity.
VI: Người đếm không được thấy số tồn trên hệ thống.`},{term:"Cycle count · Kiểm kê xoay vòng",meaning:`Count a few bins often, in small batches.
VI: Đếm một ít ô kệ thường xuyên, theo từng đợt nhỏ.`},{term:"ABC class · Phân loại ABC",meaning:`Ranks items by value. Class A is the most valuable.
VI: Xếp hàng theo giá trị. Nhóm A có giá trị cao nhất.`}]}],assessment:[{id:"inventory.assess.1",kind:"scenario",difficulty:"medium",prompt:`A shop buys water in cartons of 12 bottles. Its stock table uses bottles. A supplier delivers 8 cartons. Which stock row is correct?
VI: Một cửa hàng mua nước theo thùng 12 chai. Bảng tồn kho dùng đơn vị chai. Nhà cung cấp giao 8 thùng. Dòng tồn kho nào là đúng?`,choices:["Qty 8, unit CARTON","Qty 96, unit BOTTLE","Qty 12, unit BOTTLE","Qty 96, unit CARTON"],answer:1,why:`8 × 12 = 96 bottles. The base unit is the bottle, so every sum uses the same unit.
VI: 8 × 12 = 96 chai. Đơn vị gốc là chai, nên mọi phép cộng đều dùng cùng một đơn vị.`},{id:"inventory.assess.2",kind:"debug",difficulty:"hard",prompt:`Item C has movements +40, −15 and −5. The balance table shows 25, but SUM(Qty) gives 20. What is the most likely cause?
VI: Mặt hàng C có các dòng +40, −15 và −5. Bảng số dư ghi 25, nhưng SUM(Qty) ra 20. Nguyên nhân khả dĩ nhất là gì?`,choices:["Code changed the balance with no movement row","SUM ignored the minus rows","The balance is always 5 ahead, by design","The receipt was typed in cartons"],answer:0,why:`The movements add up to 40 − 15 − 5 = 20. So the ledger is right. Some code changed the balance without writing a movement.
VI: Các dòng cộng lại là 40 − 15 − 5 = 20, nên sổ biến động đúng. Có đoạn code đã đổi số dư mà không ghi dòng biến động.`},{id:"inventory.assess.3",kind:"compare",difficulty:"medium",prompt:`A posted receipt says 120 units. The real delivery was 100. Which fix keeps the history correct?
VI: Một phiếu nhập đã ghi sổ ghi 120 cái. Hàng thật chỉ có 100 cái. Cách sửa nào giữ được lịch sử đúng?`,choices:["Post a −20 row that links to the receipt","Edit the posted receipt quantity to 100"],answer:0,why:`The old row stays, and the −20 row explains the change. Editing the old row erases what was first recorded.
VI: Dòng cũ được giữ lại, còn dòng −20 giải thích sự thay đổi. Sửa dòng cũ sẽ xóa mất điều đã ghi lúc đầu.`},{id:"inventory.assess.4",kind:"scenario",difficulty:"medium",prompt:`A picker walks to bin A-05-01, then A-01-02, then A-05-03. This is for one small order. Walks are long every day. What change helps most?
VI: Một người lấy hàng đi qua ô A-05-01, rồi A-01-02, rồi A-05-03 cho một đơn nhỏ. Ngày nào đường đi cũng dài. Thay đổi nào giúp nhiều nhất?`,choices:["Sort the pick lines by bin code along the route","Print the pick list in item name order","Give each picker a bigger cart","Sort the pick lines by order number"],answer:0,why:`Sorting by route turns zig-zag walks into one walk along the aisles.
VI: Sắp theo đường đi biến những lần đi ngoằn ngoèo thành một vòng đi dọc các lối kệ.`},{id:"inventory.assess.5",kind:"scenario",difficulty:"medium",prompt:`A customer returns a phone with a fault. The shop needs to find the sale fast. Which data must the sale row hold?
VI: Khách trả lại một điện thoại bị lỗi. Cửa hàng cần tìm lần bán nhanh. Dòng bán phải lưu dữ liệu nào?`,choices:["The serial number of the phone sold","The total sales amount of that day","The bin where the phone was stored"],answer:0,why:`A serial number identifies one phone. Only a sale row with that serial shows who bought it.
VI: Số serial xác định đúng một chiếc điện thoại. Chỉ dòng bán có số serial đó mới cho biết ai đã mua.`},{id:"inventory.assess.6",kind:"scenario",difficulty:"hard",prompt:`Lot L7 expired yesterday. The picking screen still lists it first, because it uses FEFO. What is the best fix?
VI: Lô L7 đã hết hạn hôm qua. Màn hình lấy hàng vẫn xếp lô này đầu tiên vì đang dùng FEFO. Cách sửa tốt nhất là gì?`,choices:["Block expired lots from being picked or issued","Sort the lots by receipt date instead","Ask pickers to skip the lot by hand"],answer:0,why:`FEFO sorts by expiry, but it does not stop an expired lot. The system must block it, or move it to a hold bin.
VI: FEFO chỉ sắp theo hạn dùng, không tự chặn lô đã hết hạn. Hệ thống phải chặn lô này, hoặc chuyển sang ô hàng chờ xử lý.`},{id:"inventory.assess.7",kind:"scenario",difficulty:"medium",prompt:`The system says 80 units. The first count is 70. The shop limit is 5%. What should happen next?
VI: Hệ thống ghi 80 cái. Lần đếm đầu là 70 cái. Giới hạn của cửa hàng là 5%. Bước tiếp theo nên là gì?`,choices:["Recount the bin before posting the variance","Post −10 at once","Post +10 so the numbers match","Change the system to 70 without a reason"],answer:0,why:`70 − 80 = −10, which is 12.5%. That is over the 5% limit in this example, so recount first.
VI: 70 − 80 = −10, tức 12,5%. Con số này vượt giới hạn 5% trong ví dụ, nên phải đếm lại trước.`},{id:"inventory.assess.8",kind:"scenario",difficulty:"hard",prompt:`A shop has 2,000 items. About 40 items hold most of the stock value. A full count closes the shop for 3 days. What is the better plan?
VI: Cửa hàng có 2.000 mặt hàng. Khoảng 40 mặt hàng chiếm phần lớn giá trị tồn. Kiểm kê toàn bộ phải đóng cửa 3 ngày. Kế hoạch nào tốt hơn?`,choices:["Count the high-value A items more often, in small batches","Close the shop for 3 days every quarter","Count only the items that customers complain about"],answer:0,why:`Cycle counts check the valuable items often, in small batches. The shop stays open, and big errors are caught early.
VI: Kiểm kê xoay vòng đếm các mặt hàng giá trị cao thường xuyên, theo từng đợt nhỏ. Cửa hàng vẫn mở, và sai lệch lớn được phát hiện sớm.`},{id:"inventory.assess.9",kind:"scenario",difficulty:"hard",prompt:`On hand is 12 and reserved is 9. A purchase order of 10 units is due Friday. A customer wants 13 units on Friday. Can you promise them?
VI: Tồn thực tế là 12 và đã giữ là 9. Một đơn mua 10 cái sẽ về thứ Sáu. Khách muốn 13 cái vào thứ Sáu. Bạn có hứa giao được không?`,choices:["Yes, the ATP on Friday is exactly 13","No, only 3 are available today","No, the 10 incoming units are not promised","Yes, 12 + 10 = 22 units on Friday"],answer:0,why:`Available now is 12 − 9 = 3. ATP on Friday is 3 + 10 = 13, which covers the order. Warn sales that a late delivery breaks it.
VI: Khả dụng hiện tại là 12 − 9 = 3. ATP thứ Sáu là 3 + 10 = 13, đủ cho đơn. Cần báo kinh doanh rằng nếu hàng về trễ thì không đủ.`},{id:"inventory.assess.10",kind:"scenario",difficulty:"hard",prompt:`A shop buys 30 chairs at 200,000 VND. Then it buys 30 more at 260,000 VND. It sells 40 chairs. Which statement is right?
VI: Một cửa hàng mua 30 ghế giá 200.000đ, sau đó mua thêm 30 cái giá 260.000đ. Cửa hàng bán 40 cái. Phát biểu nào đúng?`,choices:["FIFO: cost 8,600,000 VND, so profit is higher","Weighted average: cost 8,600,000 VND, so profit is higher","Both give the same cost, so the same profit","Weighted average: cost 9,200,000 VND, so profit is higher"],answer:0,why:`FIFO sells the older chairs first. Cost: 30 × 200,000 + 10 × 260,000 = 8,600,000 VND. Average cost is 9,200,000 VND, so FIFO profit is higher.
VI: FIFO bán ghế cũ trước: 30 × 200.000 + 10 × 260.000 = 8.600.000đ. Giá vốn bình quân là 9.200.000đ, nên lợi nhuận theo FIFO cao hơn.`}]},r=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"})),c={id:"logistics",group:"domain",title:"Logistics & Shipping",emoji:"🚚",tagline:`Move goods from A to B, and always know where they are.
VI: Đưa hàng từ A đến B, và luôn biết hàng đang ở đâu.`,lessons:[{id:"logistics.lifecycle",title:"The shipment lifecycle · Vòng đời một kiện hàng",summary:`From picking to delivered, and the paths that go wrong.
VI: Từ lấy hàng đến giao thành công, và những nhánh bị lỗi.`,minutes:8,level:"basic",blocks:[{type:"text",text:`In this lesson, you learn how orders, boxes and statuses fit together.
VI: Trong bài này, bạn học cách đơn hàng, kiện hàng và trạng thái liên kết với nhau.`},{type:"text",text:`Logistics is the work of moving goods from the seller to the buyer. It has many steps: storing, packing, moving and delivering. An online shop uses software to track each step.
VI: Logistics là công việc đưa hàng từ người bán đến tay người mua. Nó gồm nhiều bước: lưu kho, đóng gói, vận chuyển và giao hàng. Shop online dùng phần mềm để theo dõi từng bước.`},{type:"text",text:`Two words matter most here. An **order** says what the customer bought. A **shipment** is the real box, or set of boxes, that moves.
VI: Có hai từ quan trọng nhất ở đây. **Đơn hàng** (order) cho biết khách đã mua gì. **Shipment** (kiện hàng giao) là thùng hàng thật sự được chuyển đi, có thể gồm nhiều thùng.
One order can become several shipments. Think of the order as the receipt. The shipment is the box on the van.
VI: Một đơn có thể tách thành nhiều shipment. Hãy coi đơn hàng như hóa đơn mua. Shipment là thùng hàng trên xe giao.
Keep them in two tables, so one order can link to many shipments.
VI: Hãy lưu chúng trong hai bảng, để một đơn có thể gắn với nhiều shipment.`},{type:"text",text:`A shipment moves through a set of **statuses** (trạng thái). A status is one step, like Shipped or Delivered. Each new status must follow from an allowed step before it.
VI: Một shipment đi qua một chuỗi **trạng thái** (status). Mỗi trạng thái là một bước, như Đã bàn giao hoặc Đã giao. Trạng thái mới phải đến từ một bước được phép đi trước đó.
The list of allowed moves is called a **state machine** (máy trạng thái). A jump from Packed straight to Delivered is not allowed.
VI: Danh sách các bước được phép gọi là **state machine** (máy trạng thái). Nhảy từ Đã đóng gói thẳng sang Đã giao là không được phép.`},{type:"visual",svg:`<svg viewBox="0 0 360 216"><defs><marker id="lgA1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-box" x="10" y="14" width="100" height="34" rx="8"/><text class="v-title" x="60" y="36" text-anchor="middle">Packed</text>
<line class="v-line" x1="110" y1="31" x2="130" y2="31" marker-end="url(#lgA1)"/>
<rect class="v-box" x="130" y="14" width="100" height="34" rx="8"/><text class="v-title" x="180" y="36" text-anchor="middle">Shipped</text>
<line class="v-line" x1="230" y1="31" x2="250" y2="31" marker-end="url(#lgA1)"/>
<rect class="v-box" x="250" y="14" width="100" height="34" rx="8"/><text class="v-title" x="300" y="36" text-anchor="middle">In transit</text>
<line class="v-line" x1="300" y1="48" x2="300" y2="72" marker-end="url(#lgA1)"/>
<rect class="v-accent" x="210" y="72" width="140" height="34" rx="8"/><text class="v-title" x="280" y="94" text-anchor="middle">Out for delivery</text>
<line class="v-line" x1="250" y1="106" x2="110" y2="146" marker-end="url(#lgA1)"/><text class="v-small" x="160" y="118" text-anchor="middle">ok</text>
<line class="v-line" x1="310" y1="106" x2="310" y2="146" marker-end="url(#lgA1)"/><text class="v-small" x="322" y="130">fail</text>
<rect class="v-good" x="10" y="146" width="150" height="34" rx="8"/><text class="v-title" x="85" y="168" text-anchor="middle">Delivered</text>
<rect class="v-bad" x="200" y="146" width="150" height="34" rx="8"/><text class="v-title" x="275" y="168" text-anchor="middle">Delivery failed</text>
<text class="v-muted v-small" x="180" y="204" text-anchor="middle">Retry 3 times, then return.</text></svg>`,alt:"A flow from Packed to Shipped to In transit to Out for delivery. From there, one arrow goes to Delivered. Another goes to Delivery failed, which means retry or return.",caption:`The happy path is short. The failed path needs its own rule.
VI: Luồng suôn sẻ thì ngắn. Nhánh thất bại cần một quy tắc riêng.`},{type:"list",items:[`**Picking** (lấy hàng): a worker takes the items from the shelves.
VI: **Picking** (lấy hàng): nhân viên lấy món hàng từ kệ.`,`**Packed** (đóng gói): the box is sealed and the label is printed.
VI: **Packed** (đóng gói): thùng đã dán kín và in nhãn.`,`**Shipped** (bàn giao): the carrier scanned the box at its hub.
VI: **Shipped** (bàn giao): hãng vận chuyển đã quét thùng tại bưu cục.`,`**Out for delivery** (đang giao): the driver has the box for today’s route.
VI: **Out for delivery** (đang giao): tài xế đã nhận thùng cho tuyến hôm nay.`,`**Delivered** (đã giao): the customer received it, and there is proof.
VI: **Delivered** (đã giao): khách đã nhận, và có bằng chứng.`]},{type:"text",text:`Some orders have more than one box. Then you count boxes, not orders. The story below is a 2-box order.
VI: Một số đơn có nhiều kiện. Khi đó bạn đếm theo kiện, không đếm theo đơn. Câu chuyện dưới đây là một đơn gồm 2 kiện.`},{type:"list",items:[`Order 1001 has two boxes. Box A is a phone (Da Nang). Box B is a case (Hanoi).
VI: Đơn 1001 có hai kiện: điện thoại (kiện A, Đà Nẵng) và ốp lưng (kiện B, Hà Nội).`,`Mon 09:00 both are PACKED. Mon 10:30 both are SHIPPED.
VI: Thứ Hai 09:00 cả hai đã đóng gói. 10:30 cả hai đã bàn giao hãng.`,`Tue 10:00 box A fails: nobody is home. Tue 14:00 box B is DELIVERED.
VI: Thứ Ba 10:00 kiện A giao thất bại vì không có ai ở nhà. 14:00 kiện B đã giao.`,`Wed 10:20 box A fails again. Thu 15:20 box A is DELIVERED on attempt 3.
VI: Thứ Tư 10:20 kiện A thất bại lần hai. Thứ Năm 15:20 kiện A đã giao ở lần thứ ba.`]},{type:"visual",svg:`<svg viewBox="0 0 360 200">
<text class="v-muted v-small" x="134" y="20" text-anchor="middle">Mon</text><text class="v-muted v-small" x="198" y="20" text-anchor="middle">Tue</text><text class="v-muted v-small" x="262" y="20" text-anchor="middle">Wed</text><text class="v-muted v-small" x="326" y="20" text-anchor="middle">Thu</text>
<text class="v-title" x="10" y="44">Box A</text><text class="v-muted v-small" x="10" y="58">phone, Da Nang</text>
<rect class="v-soft" x="104" y="28" width="60" height="38" rx="6"/><text class="v-small" x="134" y="43" text-anchor="middle">Shipped</text><text class="v-muted v-small" x="134" y="58" text-anchor="middle">10:30</text>
<rect class="v-bad" x="168" y="28" width="60" height="38" rx="6"/><text class="v-small" x="198" y="43" text-anchor="middle">Fail</text><text class="v-muted v-small" x="198" y="58" text-anchor="middle">10:00</text>
<rect class="v-bad" x="232" y="28" width="60" height="38" rx="6"/><text class="v-small" x="262" y="43" text-anchor="middle">Fail</text><text class="v-muted v-small" x="262" y="58" text-anchor="middle">10:20</text>
<rect class="v-good" x="296" y="28" width="60" height="38" rx="6"/><text class="v-small" x="326" y="43" text-anchor="middle">Delivered</text><text class="v-muted v-small" x="326" y="58" text-anchor="middle">15:20</text>
<text class="v-title" x="10" y="88">Box B</text><text class="v-muted v-small" x="10" y="102">case, Hanoi</text>
<rect class="v-soft" x="104" y="72" width="60" height="38" rx="6"/><text class="v-small" x="134" y="87" text-anchor="middle">Shipped</text><text class="v-muted v-small" x="134" y="102" text-anchor="middle">10:30</text>
<rect class="v-good" x="168" y="72" width="60" height="38" rx="6"/><text class="v-small" x="198" y="87" text-anchor="middle">Delivered</text><text class="v-muted v-small" x="198" y="102" text-anchor="middle">14:00</text>
<text class="v-title" x="10" y="142">Order 1001</text>
<rect class="v-soft" x="104" y="116" width="60" height="38" rx="6"/><text class="v-title" x="134" y="139" text-anchor="middle">0 of 2</text>
<rect class="v-warn" x="168" y="116" width="60" height="38" rx="6"/><text class="v-title" x="198" y="139" text-anchor="middle">1 of 2</text>
<rect class="v-warn" x="232" y="116" width="60" height="38" rx="6"/><text class="v-title" x="262" y="139" text-anchor="middle">1 of 2</text>
<rect class="v-good" x="296" y="116" width="60" height="38" rx="6"/><text class="v-title" x="326" y="139" text-anchor="middle">2 of 2</text>
<text class="v-muted v-small" x="180" y="180" text-anchor="middle">Count boxes, not orders.</text><text class="v-muted v-small" x="180" y="194" text-anchor="middle">Order ends on the last box.</text></svg>`,alt:"A table with four days. It has one row per box, plus a row for the order. Box A fails on Tuesday and Wednesday, then is delivered on Thursday. Box B is delivered on Tuesday. The order shows 1 of 2 on Tuesday and 2 of 2 on Thursday.",caption:`Track each box by day. The order counts how many boxes are done.
VI: Theo dõi từng kiện theo ngày. Đơn hiện số kiện đã xong.`},{type:"example",title:"Mai’s phone shop: what does the order show?",text:`On Tuesday at 14:00, box B is delivered and box A is not. The order should say "1 of 2 boxes delivered". Share done on Tuesday: 1 ÷ 2 = 50%.
VI: Thứ Ba lúc 14:00, kiện B đã giao còn kiện A chưa. Đơn nên hiện "đã giao 1 trên 2 kiện". Tỷ lệ xong hôm thứ Ba: 1 ÷ 2 = 50%.
On Thursday at 15:20, box A is delivered too. The order says "2 of 2", so it is closed. Share done: 2 ÷ 2 = 100%.
VI: Thứ Năm lúc 15:20, kiện A cũng đã giao. Đơn hiện "2 trên 2" nên được đóng. Tỷ lệ xong: 2 ÷ 2 = 100%.
Box A took 3 attempts: 2 failed, then 1 success.
VI: Kiện A đã giao 3 lần: 2 lần thất bại, rồi 1 lần thành công.`},{type:"text",text:`Common mistake: set the whole order to delivered when the first box arrives. Mai would show "Delivered" on Tuesday. The customer still has no phone and calls support. Count boxes, not orders.
VI: Lỗi hay gặp: đặt cả đơn là đã giao ngay khi kiện đầu tiên đến. Thứ Ba, shop của Mai sẽ hiện "Đã giao". Khách vẫn chưa có điện thoại và gọi hỗ trợ. Hãy đếm theo kiện, không đếm theo đơn.`},{type:"diagram",text:`PICKING          (lấy hàng)
   ↓
PACKED           (đóng gói)
   ↓
SHIPPED          (bàn giao hãng VC)
   ↓
IN_TRANSIT       (đang vận chuyển)
   ↓
OUT_FOR_DELIVERY (đang giao)
 ├─ ok ──► DELIVERED (giao thành công)
 └─ fail ► DELIVERY_FAILED
            ├─ retry ► OUT_FOR_DELIVERY
            └─ give up
                 ↓
            RETURNING (đang chuyển hoàn)
                 ↓
            RETURNED  (đã hoàn về kho)`},{type:"text",text:`The happy path is easy. The real work is in the side paths. They are: failed delivery, retry, and **return to sender** (RTS, chuyển hoàn). RTS means the carrier brings an undelivered parcel back to the shop.
VI: Đường thuận lợi thì dễ. Phần khó nằm ở các nhánh phụ: giao thất bại, giao lại, và **chuyển hoàn** (RTS). Chuyển hoàn là hãng mang kiện không giao được về lại shop.
Each side path needs its own status and rule. The shop sets a limit, for example 3 attempts.
VI: Mỗi nhánh cần một trạng thái và một quy tắc riêng. Shop đặt giới hạn, ví dụ 3 lần giao. Hết số lần đó thì kiện được chuyển hoàn.`},{type:"code",code:{lang:"sql",text:`-- One row per box (shipment)
CREATE TABLE Shipments (
  Id          BIGINT PRIMARY KEY,
  OrderId     BIGINT NOT NULL,
  Carrier     VARCHAR(20) NULL,
  TrackingNo  VARCHAR(40) NULL,
  Status      VARCHAR(30) NOT NULL,
  Attempts    INT NOT NULL DEFAULT 0,
  ShippedAt   DATETIME2 NULL,
  DeliveredAt DATETIME2 NULL
);
-- Which order lines are in which box
CREATE TABLE ShipmentItems (
  ShipmentId  BIGINT NOT NULL,
  OrderLineId BIGINT NOT NULL,
  Qty         INT NOT NULL
);`}},{type:"exercise",title:`Count a 4-box order
VI: Đếm một đơn 4 kiện`,task:`Order 2002 has four boxes. Boxes 1 and 2 are delivered on day 1. Box 3 fails on day 1, then is delivered on day 2. Box 4 fails 3 times and goes back to the shop. An order is closed when every box has a final status: DELIVERED or RETURNED. Answer three questions. How many boxes are delivered? How many are returned? Is the order closed?
VI: Đơn 2002 có bốn kiện. Kiện 1 và 2 giao xong ngày 1. Kiện 3 giao thất bại ngày 1, rồi giao xong ngày 2. Kiện 4 giao thất bại 3 lần và quay về shop. Đơn được đóng khi mọi kiện có trạng thái cuối: DELIVERED hoặc RETURNED. Hãy trả lời ba câu hỏi: có bao nhiêu kiện đã giao, bao nhiêu kiện đã hoàn, và đơn đã đóng chưa?`,hint:`Check each box on its own. Ask whether it has reached DELIVERED or RETURNED.
VI: Hãy kiểm tra từng kiện riêng. Hỏi xem kiện đó đã đạt DELIVERED hoặc RETURNED chưa.`,solution:`Delivered: boxes 1, 2 and 3, so 3 boxes. Returned: box 4, so 1 box. Every box has a final status, so the order is closed. Answer: 3 delivered, 1 returned, and the order is closed.
VI: Đã giao: kiện 1, 2 và 3, tức 3 kiện. Đã hoàn: kiện 4, tức 1 kiện. Mọi kiện đều có trạng thái cuối, nên đơn đã đóng. Đáp án: 3 kiện đã giao, 1 kiện đã hoàn, và đơn đã đóng.`},{type:"text",text:`Ask the business these questions before you build the rules.
VI: Hãy hỏi nghiệp vụ các câu sau trước khi xây quy tắc.`},{type:"list",items:[`How many delivery attempts before we return the parcel?
VI: Giao thất bại bao nhiêu lần thì chuyển hoàn?`,`Who pays the return fee: the shop or the customer?
VI: Ai trả phí chuyển hoàn: shop hay khách?`,`Is the order done when the first box arrives, or the last?
VI: Đơn hoàn tất khi kiện đầu tiên đến, hay kiện cuối cùng?`,`Can the customer refuse only part of a parcel?
VI: Khách có được từ chối một phần kiện hàng không?`]}],remember:`An order is what was bought; a shipment is the box that moves. Count boxes, and design the failure paths too.
VI: Đơn hàng là thứ khách mua; shipment là thùng hàng di chuyển. Hãy đếm theo kiện và thiết kế cả các nhánh thất bại.`,questions:[{id:"logistics.lifecycle.1",kind:"scenario",difficulty:"easy",prompt:`Items 1 and 2 ship today from warehouse A. Item 3 ships next week from warehouse B. How do you store this?
VI: Món 1 và 2 xuất hôm nay từ kho A. Món 3 xuất tuần sau từ kho B. Bạn lưu dữ liệu thế nào?`,choices:[`One shipment row on the order, with status PARTIAL
VI: Một dòng shipment cho đơn, trạng thái PARTIAL`,`Two shipments linked to the order, each with its items
VI: Hai shipment gắn với đơn, mỗi cái có danh sách món riêng`,`A comma list of tracking numbers on the order row
VI: Một chuỗi mã vận đơn cách nhau dấu phẩy trên dòng đơn`,`Split it into two separate orders for the customer
VI: Tách thành hai đơn hàng riêng cho khách`],answer:1,why:`Each box has its own carrier, tracking number, items and status. A shipment table linked to the order keeps that clean. Splitting the order changes what the customer bought.
VI: Mỗi kiện có hãng, mã vận đơn, danh sách món và trạng thái riêng. Bảng shipment gắn với đơn giữ dữ liệu rõ ràng. Tách đơn sẽ làm sai thứ khách đã mua.`},{id:"logistics.lifecycle.2",kind:"code",difficulty:"medium",prompt:`Finance uses this function to count delivered parcels. What is wrong with it?
VI: Kế toán dùng hàm này để đếm số kiện đã giao. Hàm này sai ở đâu?`,code:{lang:"ts",text:`function isDelivered(s: Shipment) {
  return s.status !== 'PICKING'
      && s.status !== 'PACKED';
}`},choices:["It counts in-transit and returned parcels as delivered","It misses parcels that have the status DELIVERED","It throws an error when the status is null","Nothing is wrong; every parcel after packing counts"],answer:0,why:`The check says "not picking and not packed", so IN_TRANSIT, DELIVERY_FAILED and RETURNED also pass. Check for the exact status you mean: \`s.status === 'DELIVERED'\`.
VI: Điều kiện là "không phải đang lấy hàng và không phải đã đóng gói", nên IN_TRANSIT, DELIVERY_FAILED và RETURNED cũng lọt qua. Hãy so sánh đúng trạng thái cần: \`s.status === 'DELIVERED'\`.`,remember:"Test for the status you want, not for the ones you do not want."},{id:"logistics.lifecycle.3",kind:"truefalse",difficulty:"easy",prompt:`"Return to sender" means the customer got the parcel. Then they sent it back because they did not like it.
VI: "Chuyển hoàn" nghĩa là khách đã nhận hàng rồi gửi trả lại vì không thích.`,choices:["True","False"],answer:1,why:`Return to sender is when the carrier could not deliver and brings the parcel back. A customer return after delivery is a different flow. It has its own reasons, refund and checks.
VI: Chuyển hoàn là khi hãng không giao được và mang kiện về lại. Khách trả hàng sau khi đã nhận là một luồng khác, có lý do, hoàn tiền và kiểm tra riêng.`},{id:"logistics.lifecycle.4",kind:"scenario",difficulty:"medium",prompt:`A parcel failed delivery 3 times because nobody was home. The business rule is "max 3 attempts". What should the system do?
VI: Một kiện giao thất bại 3 lần vì không có ai ở nhà. Quy tắc là "tối đa 3 lần giao". Hệ thống nên làm gì?`,choices:[`Keep it in OUT_FOR_DELIVERY until someone checks it
VI: Giữ trạng thái đang giao cho đến khi có người kiểm tra`,`Move it to RETURNING and tell the customer and the shop
VI: Chuyển sang đang hoàn và báo cho khách và shop`,`Mark it DELIVERED so the order can be closed
VI: Đánh dấu đã giao để đóng đơn hàng`,`Delete the shipment and create a brand new one
VI: Xóa shipment và tạo một shipment mới`],answer:1,why:`The rule says no more attempts, so the parcel follows the return path. Faking DELIVERED makes revenue and stock wrong. Deleting loses the history you need for disputes.
VI: Quy tắc nói không giao thêm, nên kiện đi theo luồng chuyển hoàn. Ghi giả "đã giao" làm sai doanh thu và tồn kho. Xóa thì mất lịch sử cần cho khiếu nại.`}]},{id:"logistics.carriers",title:"Carriers, 3PL and shipping cost · Hãng vận chuyển, 3PL và cước phí",summary:`Who moves the box, and how the price is calculated.
VI: Ai chở hàng, và cước phí được tính thế nào.`,minutes:9,level:"basic",blocks:[{type:"text",text:`In this lesson, you learn how shipping fees are calculated.
VI: Trong bài này, bạn học cách tính cước vận chuyển.`},{type:"text",text:`There are three common ways to move goods. You can use your **own fleet** (your own trucks and drivers). You can hire a **carrier** (hãng vận chuyển), like a courier company. Or you can use a **3PL** (third-party logistics). It is an outside company that stores, packs and ships for you.
VI: Có ba cách phổ biến để chở hàng. Bạn có thể dùng **đội xe riêng** (xe và tài xế của mình). Bạn có thể thuê **hãng vận chuyển** (carrier), như công ty chuyển phát. Hoặc dùng **3PL** (logistics bên thứ ba): công ty ngoài lo lưu kho, đóng gói và giao hàng giúp bạn.`},{type:"text",text:`Each choice trades cost against control. An own fleet gives the most control. But it has high fixed costs: trucks, drivers, fuel and repairs. A carrier charges per parcel, so cost follows volume. A 3PL charges a fee, often per order or per parcel.
VI: Mỗi lựa chọn đánh đổi giữa chi phí và quyền kiểm soát. Đội xe riêng cho nhiều quyền kiểm soát nhất, nhưng chi phí cố định cao: xe, tài xế, nhiên liệu và sửa chữa. Hãng vận chuyển tính theo từng kiện, nên chi phí đi theo số lượng. 3PL tính phí, thường theo đơn hoặc theo kiện.`},{type:"diagram",text:`           Own fleet  Carrier   3PL
Store      you        you       3PL
Pack       you        you       3PL
Deliver    you        carrier   3PL or
                                its carrier
Control    high       medium    lower
Your data  yours      their API their API`},{type:"text",text:`Carriers price by weight, distance and service. Three things set the price: **weight**, **zone** (vùng, a distance group) and **service**. Service means standard or express delivery. Extra fees, called **surcharges** (phụ phí), can add cost. Examples are fuel fees, COD fees and remote area fees.
VI: Hãng tính cước theo cân nặng, khoảng cách và dịch vụ. Ba yếu tố quyết định giá: **cân nặng**, **vùng** (nhóm khoảng cách) và **dịch vụ** (tiêu chuẩn hay nhanh). Phụ phí (**surcharge**) là các khoản cộng thêm, ví dụ phí nhiên liệu, phí COD hoặc phí vùng xa.`},{type:"text",text:`Carriers price by weight. But a big, light box still takes space in the truck. So they also compute **volumetric weight** (trọng lượng quy đổi). It is length × width × height, divided by a **divisor** (hệ số chia). The carrier sets the divisor. You pay for the bigger of the two: the **chargeable weight** (khối lượng tính cước).
VI: Hãng tính cước theo cân nặng. Nhưng thùng to mà nhẹ vẫn chiếm chỗ trên xe. Vì vậy hãng còn tính **trọng lượng quy đổi** (volumetric weight). Đó là dài × rộng × cao, chia cho một **hệ số chia** (divisor) do hãng đặt. Bạn trả theo số lớn hơn: **khối lượng tính cước** (chargeable weight).`},{type:"visual",svg:`<svg viewBox="0 0 360 190"><text class="v-title" x="180" y="20" text-anchor="middle">Pillow box 50 × 40 × 30 cm</text>
<text class="v-muted v-small" x="10" y="48">Actual weight</text>
<rect class="v-good" x="10" y="54" width="80" height="24" rx="6"/><text class="v-title" x="50" y="71" text-anchor="middle">4 kg</text>
<text class="v-muted v-small" x="10" y="98">Volumetric weight</text>
<rect class="v-warn" x="10" y="104" width="240" height="24" rx="6"/><text class="v-title" x="130" y="121" text-anchor="middle">12 kg</text>
<text class="v-muted v-small" x="262" y="121">60,000 / 5,000</text>
<rect class="v-solid" x="10" y="146" width="340" height="32" rx="8"/><text class="v-on-solid v-title" x="180" y="167" text-anchor="middle">You pay the bigger: 12 kg</text></svg>`,alt:"Two bars for one pillow box. The actual weight bar is short, 4 kg. The volumetric weight bar is three times longer, 12 kg. A bar below says you pay for the bigger one, 12 kg.",caption:`A big, light box is billed by its size, not its weight.
VI: Thùng to mà nhẹ bị tính cước theo kích thước, không theo cân nặng.`},{type:"text",text:`Step 1: find the volume. Multiply length × width × height, in cm³.
VI: Bước 1: tính thể tích. Nhân dài × rộng × cao, đơn vị cm³.
Step 2: divide by the divisor. The result is the volumetric weight in kg.
VI: Bước 2: chia cho hệ số chia. Kết quả là trọng lượng quy đổi, đơn vị kg.
Step 3: take the bigger of the actual and volumetric weight. That is the chargeable weight.
VI: Bước 3: lấy số lớn hơn giữa cân thật và trọng lượng quy đổi. Đó là khối lượng tính cước.`},{type:"diagram",text:`Box 50 × 40 × 30 cm, actual weight 4 kg

Volume  = 50 × 40 × 30 = 60,000 cm³
Vol. wt = 60,000 / 5,000 = 12 kg
          (divisor 5,000: an example,
           it comes from the carrier)

Chargeable = max(actual, volumetric)
           = max(4, 12) = 12 kg`},{type:"text",text:`The divisor depends on the carrier and the service. Values like 5,000 or 6,000 are common, but read the contract. The final price comes from a rate table. It has a price per weight band for each zone. A weight band is a range, like 0–1 kg or 1–2 kg.
VI: Hệ số chia tùy theo hãng và loại dịch vụ. Các số như 5.000 hoặc 6.000 hay gặp, nhưng phải đọc hợp đồng. Giá cuối lấy từ bảng giá: mỗi mức cân nặng và mỗi vùng có một đơn giá. Mức cân nặng là một khoảng, như 0–1 kg hoặc 1–2 kg.`},{type:"code",code:{lang:"ts",text:`function chargeableKg(
  actualKg: number,
  l: number, w: number, h: number, // cm
  divisor: number, // from carrier contract
): number {
  const volKg = (l * w * h) / divisor;
  return Math.max(actualKg, volKg);
}
// Many carriers also round up to a step,
// for example 0.5 kg. Check the contract.`}},{type:"list",items:[`Linh sells pillow sets in Hanoi. One box is 50 × 40 × 30 cm and weighs 4 kg.
VI: Linh bán bộ gối ở Hà Nội. Mỗi thùng 50 × 40 × 30 cm, nặng 4 kg.`,`Volume = 50 × 40 × 30 = 60,000 cm³. Divisor 5,000 gives 12 kg.
VI: Thể tích = 50 × 40 × 30 = 60.000 cm³. Chia 5.000 được 12 kg.`,`The carrier charges 5,000 VND per kg. Billed: 12 × 5,000 = 60,000 VND.
VI: Hãng tính 5.000 đồng mỗi kg. Hãng tính: 12 × 5.000 = 60.000 đồng.`,`Checkout quoted by actual weight: 4 × 5,000 = 20,000 VND. Loss: 40,000 VND per order.
VI: Trang thanh toán báo theo cân thật: 4 × 5.000 = 20.000 đồng. Lỗ 40.000 đồng mỗi đơn.`]},{type:"visual",svg:`<svg viewBox="0 0 360 200">
<text class="v-muted v-small" x="180" y="16" text-anchor="middle">Bars drawn to scale.</text>
<text class="v-title" x="10" y="42">Checkout quote: 20,000 VND</text>
<rect class="v-good" x="10" y="48" width="110" height="24" rx="6"/>
<text class="v-title" x="10" y="92">Carrier bill: 60,000 VND</text>
<rect class="v-bad" x="10" y="98" width="330" height="24" rx="6"/>
<rect class="v-warn" x="10" y="152" width="340" height="34" rx="8"/><text class="v-title" x="180" y="174" text-anchor="middle">Loss: 40,000 VND per order</text></svg>`,alt:"Two bars drawn to scale. The checkout quote bar is short, 20,000 VND. The carrier bill bar is three times longer, 60,000 VND. A box below shows the loss of 40,000 VND per order.",caption:`The checkout quotes 4 kg. The carrier bills 12 kg. The gap is lost money.
VI: Checkout báo phí theo 4 kg, hãng tính theo 12 kg. Phần chênh là tiền lỗ.`},{type:"example",title:"Linh’s monthly loss",text:`Each order loses 40,000 VND, which is 60,000 billed minus 20,000 quoted. Linh ships 50 orders a day. So the loss is 50 × 40,000 = 2,000,000 VND a day.
VI: Mỗi đơn lỗ 40.000 đồng, tức 60.000 hãng tính trừ 20.000 đã báo. Linh gửi 50 đơn mỗi ngày, nên lỗ là 50 × 40.000 = 2.000.000 đồng mỗi ngày.
In a 30-day month: 2,000,000 × 30 = 60,000,000 VND. A smaller box, or vacuum packing, would cut this.
VI: Trong tháng 30 ngày: 2.000.000 × 30 = 60.000.000 đồng. Thùng nhỏ hơn hoặc đóng gói hút chân không sẽ giảm khoản này.`},{type:"exercise",title:`Price one box
VI: Tính cước một kiện`,task:`A box is 60 × 40 × 25 cm and weighs 5 kg. The divisor is 6,000. The rate is 8,000 VND per kg. Find the chargeable weight and the fee.
VI: Một kiện 60 × 40 × 25 cm, nặng 5 kg. Hệ số chia là 6.000. Giá là 8.000 đồng mỗi kg. Hãy tìm khối lượng tính cước và phí.`,hint:`Find the volume first, then divide by 6,000. Compare the result with 5 kg.
VI: Tính thể tích trước, rồi chia cho 6.000. So kết quả với 5 kg.`,solution:`Volume: 60 × 40 × 25 = 60,000 cm³. Volumetric weight: 60,000 / 6,000 = 10 kg. Chargeable: the bigger of 5 kg and 10 kg, so 10 kg. Fee: 10 × 8,000 = 80,000 VND.
VI: Thể tích: 60 × 40 × 25 = 60.000 cm³. Trọng lượng quy đổi: 60.000 / 6.000 = 10 kg. Khối lượng tính cước: số lớn hơn giữa 5 kg và 10 kg, tức 10 kg. Phí: 10 × 8.000 = 80.000 đồng.`},{type:"text",text:`Common mistake: test the shipping quote only with small, heavy items. They match the carrier bill, so the bug stays hidden. Always test one bulky product too.
VI: Lỗi hay gặp: chỉ thử báo phí ship với hàng nhỏ mà nặng. Loại này khớp với hóa đơn hãng nên lỗi bị che. Hãy luôn thử thêm một sản phẩm cồng kềnh.`},{type:"text",text:`IT side: store the box size and weight for each package. Store the divisor and the rate table for each carrier service. Keep both the fee you quoted and the fee the carrier billed, then compare them.
VI: Phía IT: lưu kích thước và cân nặng cho từng kiện. Lưu hệ số chia và bảng giá theo từng dịch vụ của hãng. Lưu cả phí đã báo khách và phí hãng tính, rồi đối chiếu hai số này.`}],remember:`Chargeable weight = max(actual, volumetric). The divisor comes from the carrier contract.
VI: Khối lượng tính cước = max(cân thật, quy đổi). Hệ số chia lấy từ hợp đồng với hãng.`,questions:[{id:"logistics.carriers.1",kind:"mcq",difficulty:"medium",prompt:`A box is 40 × 30 × 20 cm and weighs 3 kg. The carrier divisor is 6,000. What is the chargeable weight?
VI: Thùng 40 × 30 × 20 cm, nặng 3 kg. Hệ số chia của hãng là 6.000. Khối lượng tính cước là bao nhiêu?`,choices:["3 kg","4 kg","7 kg","24 kg"],answer:1,why:`40 × 30 × 20 = 24,000 cm³. Divided by 6,000 gives 4 kg. The bigger of 3 kg and 4 kg is 4 kg.
VI: 40 × 30 × 20 = 24.000 cm³. Chia 6.000 được 4 kg. Số lớn hơn giữa 3 kg và 4 kg là 4 kg.`},{id:"logistics.carriers.2",kind:"debug",difficulty:"medium",prompt:`For bulky products, the carrier invoice is often much higher than the quoted fee. Small heavy items match well. Most likely cause?
VI: Với hàng cồng kềnh, hóa đơn của hãng thường cao hơn nhiều so với phí hệ thống báo. Hàng nhỏ mà nặng thì khớp. Nguyên nhân khả năng cao nhất?`,choices:[`The carrier adds VAT only to bulky items
VI: Hãng chỉ cộng VAT cho hàng cồng kềnh`,`Your quote uses actual weight, not chargeable weight
VI: Hệ thống báo giá theo cân thật, không theo khối lượng tính cước`,`The zone table has the wrong province names
VI: Bảng vùng bị sai tên tỉnh`,`The carrier API returns prices in a different currency
VI: API của hãng trả giá theo loại tiền khác`],answer:1,why:`Only bulky items are wrong, so the problem is size, not distance or tax. Bulky items have a volumetric weight above their actual weight.
VI: Chỉ hàng cồng kềnh bị lệch, nên lỗi nằm ở kích thước, không phải khoảng cách hay thuế. Hàng cồng kềnh có trọng lượng quy đổi lớn hơn cân thật.`},{id:"logistics.carriers.3",kind:"compare",difficulty:"easy",prompt:`A small online shop sends about 20 parcels a day to all of Vietnam. Which option usually fits best?
VI: Một shop online nhỏ gửi khoảng 20 kiện mỗi ngày đi khắp Việt Nam. Phương án nào thường phù hợp nhất?`,choices:[`Buy trucks and hire drivers for every region
VI: Mua xe tải và thuê tài xế cho mọi miền`,`Use a carrier and pay per parcel
VI: Dùng hãng vận chuyển, trả tiền theo từng kiện`,`Open its own warehouse in each province
VI: Mở kho riêng ở mỗi tỉnh`],answer:1,why:`At 20 parcels a day, a nationwide fleet costs too much. Own warehouses cost even more. A carrier already covers the whole country and charges per parcel.
VI: Với 20 kiện mỗi ngày, tự có đội xe hay kho khắp nước thì quá tốn so với sản lượng. Hãng vận chuyển đã phủ toàn quốc và tính tiền theo từng kiện.`},{id:"logistics.carriers.4",kind:"truefalse",difficulty:"easy",prompt:`All carriers use the same volumetric divisor. So it is safe to hard-code 5,000 in the code.
VI: Mọi hãng đều dùng chung một hệ số chia, nên có thể ghi cứng số 5.000 trong code.`,choices:["True","False"],answer:1,why:`The divisor depends on the carrier and the service. It can change in a new contract. Store it as data for each carrier service.
VI: Hệ số chia tùy theo hãng và dịch vụ, và có thể đổi khi ký hợp đồng mới. Hãy lưu nó thành dữ liệu theo từng dịch vụ của hãng.`}]},{id:"logistics.tracking",title:"Tracking and status events · Theo dõi hành trình và sự kiện trạng thái",summary:`Carrier events arrive late, twice, or in the wrong order.
VI: Sự kiện từ hãng có thể đến trễ, đến hai lần, hoặc sai thứ tự.`,minutes:10,level:"practical",blocks:[{type:"text",text:`In this lesson, you learn how to keep parcel status correct.
VI: Trong bài này, bạn học cách giữ trạng thái kiện luôn đúng.`},{type:"text",text:`The carrier tells you where the parcel is. There are two ways. With a **webhook**, the carrier calls your URL (web address) when something happens. With **polling**, you call the carrier API every few minutes and ask.
VI: Hãng vận chuyển cho bạn biết kiện hàng đang ở đâu. Có hai cách. Với **webhook**, hãng gọi vào URL (địa chỉ web) của bạn khi có sự kiện. Với **polling**, bạn gọi API của hãng vài phút một lần để hỏi.
Think of a webhook as a doorbell. Polling is like checking the mailbox again and again.
VI: Hãy hình dung webhook như chuông cửa. Polling giống như cứ ra hộp thư kiểm tra hoài.`},{type:"compare",left:{title:"Webhook",items:[`Fast: news comes at once
VI: Nhanh: tin đến ngay`,`Can arrive twice (retries)
VI: Có thể đến hai lần (do gửi lại)`,`Your endpoint must be up
VI: Địa chỉ nhận của bạn phải luôn hoạt động`]},right:{title:"Polling",items:[`Simple to start
VI: Dễ bắt đầu`,`Slower: news waits for the next call
VI: Chậm: tin phải chờ lần hỏi tiếp theo`,`Many calls, and rate limits
VI: Nhiều lần gọi, và có giới hạn số lần gọi`]}},{type:"text",text:"Events are messy. They can arrive late, twice, or out of order. Each event has the time it happened (`OccurredAt`). You also know when you received it (`ReceivedAt`).\nVI: Sự kiện không gọn gàng. Chúng có thể đến trễ, đến hai lần, hoặc sai thứ tự. Mỗi sự kiện có thời điểm xảy ra (`OccurredAt`). Bạn cũng biết thời điểm mình nhận được (`ReceivedAt`).\nUse OccurredAt to decide the order of events. Use ReceivedAt only for logs.\nVI: Dùng OccurredAt để quyết định thứ tự sự kiện. ReceivedAt chỉ dùng cho nhật ký."},{type:"visual",svg:`<svg viewBox="0 0 360 200"><defs><marker id="lgB1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<text class="v-muted v-small" x="180" y="16" text-anchor="middle">Events arrive in this order</text>
<rect class="v-box" x="10" y="26" width="160" height="42" rx="8"/><text class="v-title" x="90" y="45" text-anchor="middle">1st: DELIVERED</text><text class="v-muted v-small" x="90" y="60" text-anchor="middle">happened 17:30</text>
<rect class="v-box" x="190" y="26" width="160" height="42" rx="8"/><text class="v-title" x="270" y="45" text-anchor="middle">2nd: Out for delivery</text><text class="v-muted v-small" x="270" y="60" text-anchor="middle">happened 15:00 (late)</text>
<line class="v-line" x1="150" y1="68" x2="90" y2="108" marker-end="url(#lgB1)"/>
<line class="v-line" x1="210" y1="68" x2="270" y2="108" marker-end="url(#lgB1)"/>
<rect class="v-bad" x="10" y="110" width="160" height="56" rx="8"/><text class="v-bad-text v-title" x="90" y="130" text-anchor="middle">Last received wins</text><text class="v-small" x="90" y="150" text-anchor="middle">Shows: OUT_FOR_DELIVERY</text>
<rect class="v-good" x="190" y="110" width="160" height="56" rx="8"/><text class="v-good-text v-title" x="270" y="130" text-anchor="middle">Latest OccurredAt</text><text class="v-small" x="270" y="150" text-anchor="middle">Shows: DELIVERED</text>
<text class="v-muted v-small" x="180" y="188" text-anchor="middle">Never leave a final status.</text></svg>`,alt:"Two events arrive. DELIVERED happened at 17:30 and arrived first. OUT_FOR_DELIVERY happened at 15:00 but arrived late. Using arrival order shows the wrong status. Using the time it happened shows DELIVERED.",caption:`Pick the status by when it happened, not when it arrived.
VI: Chọn trạng thái theo lúc nó xảy ra, không theo lúc nó đến.`},{type:"diagram",text:`Happened (OccurredAt)      You receive
09:00 PICKED_UP       ──►  09:01
13:00 IN_TRANSIT      ──►  13:02
13:00 IN_TRANSIT      ──►  13:05 again
17:30 DELIVERED       ──►  17:31
15:00 OUT_FOR_DELIV.  ──►  17:40 late

"Last received wins" →
status goes back to OUT_FOR_DELIVERY`},{type:"example",title:"Thao Tea: the late event",text:`The driver’s app was offline from 15:00 to 17:40. At 17:31 the carrier sends DELIVERED (happened 17:30). At 17:40 it sends OUT_FOR_DELIVERY (happened 15:00).
VI: App của tài xế mất mạng từ 15:00 đến 17:40. Lúc 17:31 hãng gửi "đã giao" (xảy ra lúc 17:30). Lúc 17:40 hãng gửi "đang giao" (xảy ra lúc 15:00).
The 15:00 event is older than the saved 17:30 event, so Thao Tea ignores it.
VI: Sự kiện 15:00 cũ hơn sự kiện 17:30 đã lưu, nên Thao Tea bỏ qua nó.`},{type:"text",text:'Common mistake: sort by `ReceivedAt`. Say 2% of 300 parcels, so 6 a day, get a late event. Six customers a day see "Delivered" go back to "Out for delivery". Support gets the calls.\nVI: Lỗi hay gặp: sắp theo `ReceivedAt`. Giả sử 2% của 300 kiện, tức 6 kiện mỗi ngày, có sự kiện đến trễ. Mỗi ngày có 6 khách thấy "Đã giao" quay lại "Đang giao". Bộ phận hỗ trợ nhận cuộc gọi.'},{type:"text",text:"So the handler must be **idempotent**. That means handling the same event twice gives the same result as once. Use a unique key for each event. Pick the current status by `OccurredAt`. Never leave a final status because of an old event.\nVI: Vì vậy phần xử lý phải **idempotent**: xử lý cùng một sự kiện hai lần cho kết quả như một lần. Dùng một khóa duy nhất cho mỗi sự kiện. Chọn trạng thái hiện tại theo `OccurredAt`. Đừng rời khỏi trạng thái cuối chỉ vì một sự kiện cũ."},{type:"visual",svg:`<svg viewBox="0 0 360 210"><defs><marker id="lgB2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-box" x="10" y="14" width="100" height="40" rx="8"/><text class="v-title" x="60" y="31" text-anchor="middle">Try 1</text><text class="v-muted v-small" x="60" y="46" text-anchor="middle">EVT-88 arrives</text>
<rect class="v-box" x="130" y="14" width="100" height="40" rx="8"/><text class="v-title" x="180" y="31" text-anchor="middle">Try 2</text><text class="v-muted v-small" x="180" y="46" text-anchor="middle">retry: EVT-88</text>
<rect class="v-box" x="250" y="14" width="100" height="40" rx="8"/><text class="v-title" x="300" y="31" text-anchor="middle">Try 3</text><text class="v-muted v-small" x="300" y="46" text-anchor="middle">retry: EVT-88</text>
<line class="v-line" x1="60" y1="54" x2="92" y2="80" marker-end="url(#lgB2)"/>
<line class="v-line" x1="180" y1="54" x2="180" y2="80" marker-end="url(#lgB2)"/>
<line class="v-line" x1="300" y1="54" x2="268" y2="80" marker-end="url(#lgB2)"/>
<rect class="v-warn" x="50" y="80" width="260" height="36" rx="8"/><text class="v-title" x="180" y="103" text-anchor="middle">Is event key already saved?</text>
<line class="v-line" x1="110" y1="116" x2="80" y2="146" marker-end="url(#lgB2)"/><text class="v-small" x="60" y="134" text-anchor="end">yes</text>
<line class="v-line" x1="250" y1="116" x2="280" y2="146" marker-end="url(#lgB2)"/><text class="v-small" x="300" y="134">no</text>
<rect class="v-bad" x="10" y="146" width="140" height="40" rx="8"/><text class="v-title" x="80" y="163" text-anchor="middle">Yes: skip</text><text class="v-small" x="80" y="178" text-anchor="middle">no SMS sent</text>
<rect class="v-good" x="210" y="146" width="140" height="40" rx="8"/><text class="v-title" x="280" y="163" text-anchor="middle">No: first time</text><text class="v-small" x="280" y="178" text-anchor="middle">save key, send 1 SMS</text>
<text class="v-muted v-small" x="180" y="204" text-anchor="middle">Tries 2 and 3 do nothing.</text></svg>`,alt:"Three copies of one event arrive. Each copy checks whether its key is already saved. If it is, the copy is skipped. Only the first copy saves the key and sends one SMS.",caption:`The unique key stops the duplicate. Only the first event sends the SMS.
VI: Khóa duy nhất chặn bản trùng. Chỉ sự kiện đầu tiên gửi SMS.`},{type:"list",items:[`Thao Tea ships about 300 parcels a day. Parcel TT-5521 is picked up Mon at 09:00.
VI: Thao Tea gửi khoảng 300 kiện mỗi ngày. Kiện TT-5521 được lấy lúc 09:00 thứ Hai.`,`Step 1: save the event with its unique key. If the key exists, stop.
VI: Bước 1: lưu sự kiện kèm khóa duy nhất. Nếu khóa đã có thì dừng.`,`Step 2: map the carrier code to your status. Unknown code: alert, do not guess.
VI: Bước 2: ánh xạ mã của hãng sang trạng thái của mình. Mã lạ: báo động, không đoán.`,"Step 3: apply it only if `OccurredAt` is newer and the status is not final.\nVI: Bước 3: chỉ áp dụng nếu `OccurredAt` mới hơn và trạng thái chưa phải trạng thái cuối."]},{type:"code",code:{lang:"ts",text:`async function onEvent(e: CarrierEvent) {
  // 1. Seen before? Stop. (unique index
  //    on the event key makes this safe)
  const isNew = await events.tryInsert(e);
  if (!isNew) return;

  // 2. Carrier code → our status
  const st = statusMap[e.carrier]?.[e.code];
  if (!st) return alertUnknown(e);

  // 3. Never go back in time
  const s = await shipments.get(e.trackingNo);
  if (isFinal(s.status)) return;
  if (e.occurredAt <= s.lastEventAt) return;
  await shipments.update(s.id, st,
    e.occurredAt);
}`}},{type:"diagram",text:`Carrier code (example)   Our status
"PU", "Picked"       →   SHIPPED
"HUB_IN", "TRS"      →   IN_TRANSIT
"OFD"                →   OUT_FOR_DELIVERY
"DLV"                →   DELIVERED
"FD-01", "FD-02"     →   DELIVERY_FAILED
(unknown code)       →   alert, no guess`},{type:"text",text:`Each carrier uses its own codes. One sends "DLV" for delivered. Another sends the number 5. Map both to DELIVERED in one table. Then the customer page never shows a raw code.
VI: Mỗi hãng có mã riêng. Một hãng gửi "DLV" khi đã giao. Hãng khác gửi số 5. Hãy ánh xạ cả hai thành DELIVERED trong một bảng, để trang khách không bao giờ hiện mã thô.`},{type:"exercise",title:`Find the status from four events
VI: Tìm trạng thái từ bốn sự kiện`,task:`Four events arrive for one parcel, in this order. A: OUT_FOR_DELIVERY, happened 09:00. B: DELIVERED, happened 11:00. C: OUT_FOR_DELIVERY, happened 10:00. D: DELIVERED, happened 11:00, same event key as B. Which status should the system show after all four?
VI: Bốn sự kiện của một kiện hàng đến theo thứ tự sau. A: OUT_FOR_DELIVERY, xảy ra lúc 09:00. B: DELIVERED, xảy ra lúc 11:00. C: OUT_FOR_DELIVERY, xảy ra lúc 10:00. D: DELIVERED, xảy ra lúc 11:00, cùng khóa sự kiện với B. Hệ thống nên hiện trạng thái nào sau khi xử lý cả bốn?`,hint:`Skip duplicates first. Then compare each OccurredAt with the last saved one.
VI: Trước hết bỏ bản trùng. Sau đó so OccurredAt của từng sự kiện với sự kiện đã lưu gần nhất.`,solution:`A has a new key, so step 1 saves it. Step 3 applies it: OUT_FOR_DELIVERY at 09:00. B has a new key and 11:00 is newer, so the status becomes DELIVERED. C has a new key. But 10:00 is older than 11:00, so the status stays DELIVERED. D has a saved key, so step 1 stops it. Answer: DELIVERED at 11:00.
VI: A có khóa mới, nên bước 1 lưu lại. Bước 3 áp dụng: OUT_FOR_DELIVERY lúc 09:00. B có khóa mới và 11:00 mới hơn, nên trạng thái thành DELIVERED. C có khóa mới, nhưng 10:00 cũ hơn 11:00, nên trạng thái giữ nguyên là DELIVERED. D đã có khóa, nên bước 1 dừng lại. Đáp án: DELIVERED lúc 11:00.`},{type:"exercise",title:`Cost of duplicate SMS
VI: Chi phí của SMS trùng`,task:`Thao Tea sends 300 parcels a day. 2% of parcels get one duplicate event. Without a key, each duplicate sends one extra SMS. How many extra SMS in one day, and in 30 days?
VI: Thao Tea gửi 300 kiện mỗi ngày. 2% kiện nhận thêm một sự kiện trùng. Nếu không có khóa, mỗi bản trùng gửi thêm một SMS. Có bao nhiêu SMS thừa trong một ngày, và trong 30 ngày?`,hint:`Work out the number of duplicates for one day first. Then multiply by 30.
VI: Tính số bản trùng trong một ngày trước. Sau đó nhân với 30.`,solution:`2% of 300 = 300 × 0.02 = 6 duplicates per day. In 30 days: 6 × 30 = 180 extra SMS. The unique key removes all of them.
VI: 2% của 300 = 300 × 0,02 = 6 bản trùng mỗi ngày. Trong 30 ngày: 6 × 30 = 180 SMS thừa. Khóa duy nhất loại bỏ hết các SMS này.`}],remember:`Store every event and ignore duplicates. Order them by when they happened. Map carrier codes to your statuses.
VI: Lưu mọi sự kiện, bỏ qua bản trùng, sắp theo thời điểm xảy ra, và ánh xạ mã của hãng sang trạng thái của mình.`,questions:[{id:"logistics.tracking.1",kind:"debug",difficulty:"medium",prompt:`Customers say their order page showed "Delivered", then went back to "Out for delivery". What is the most likely cause?
VI: Khách phản ánh trang đơn hàng hiện "Đã giao", rồi quay lại "Đang giao". Nguyên nhân khả năng cao nhất?`,choices:[`A late event was applied because the code used arrival order
VI: Một sự kiện đến trễ được áp dụng vì code dùng thứ tự nhận`,`The carrier delivered the parcel to the wrong address
VI: Hãng giao nhầm địa chỉ`,`The browser cached an old version of the order page
VI: Trình duyệt lưu cache trang đơn hàng cũ`,`The database lost the DELIVERED row during a backup
VI: Cơ sở dữ liệu mất dòng DELIVERED khi sao lưu`],answer:0,why:'An old OUT_FOR_DELIVERY event arrived after DELIVERED, and "last received wins" applied it. Compare `OccurredAt` and never leave a final status.\nVI: Sự kiện "đang giao" cũ đến sau "đã giao", và logic "nhận sau thắng" đã áp dụng nó. Hãy so sánh `OccurredAt` và đừng rời trạng thái cuối.'},{id:"logistics.tracking.2",kind:"scenario",difficulty:"medium",prompt:`Your webhook endpoint was slow, so the carrier sent the same event 3 times. The customer got 3 "Your parcel is here" SMS. What fixes this?
VI: Endpoint webhook phản hồi chậm nên hãng gửi cùng một sự kiện 3 lần. Khách nhận 3 tin SMS "Hàng đã đến". Cách sửa là gì?`,choices:[`Ask the carrier to stop retrying failed webhooks
VI: Đề nghị hãng ngừng gửi lại webhook bị lỗi`,`Save the event key first; skip the SMS if it already exists
VI: Lưu khóa sự kiện trước; nếu đã có thì bỏ qua SMS`,`Send the SMS before saving, so it is always fast
VI: Gửi SMS trước rồi mới lưu, để luôn nhanh`,`Wait 10 seconds before sending each SMS
VI: Chờ 10 giây trước khi gửi mỗi tin SMS`],answer:1,why:`Retries are normal and protect you from lost events. Make the handler idempotent. A unique event key means a duplicate does nothing, including the SMS.
VI: Gửi lại là chuyện bình thường và giúp không mất sự kiện. Hãy làm phần xử lý idempotent: có khóa sự kiện duy nhất thì bản trùng không làm gì, kể cả gửi SMS.`},{id:"logistics.tracking.3",kind:"mcq",difficulty:"easy",prompt:`What does "idempotent" mean for an event handler?
VI: "Idempotent" nghĩa là gì đối với phần xử lý sự kiện?`,choices:["It handles events faster than polling does","Handling an event twice gives the same result as once","It handles events in the order they were received","It rejects every event that has no tracking number"],answer:1,why:`Idempotent means repeating the action changes nothing after the first time. That is what you need when events can arrive twice.
VI: Idempotent nghĩa là làm lại thao tác không thay đổi gì sau lần đầu. Đó là điều cần khi sự kiện có thể đến hai lần.`},{id:"logistics.tracking.4",kind:"scenario",difficulty:"hard",prompt:`A carrier sends a status code "RTS-07" that is not in your mapping table. What is the best handling?
VI: Hãng gửi mã trạng thái "RTS-07" không có trong bảng ánh xạ. Cách xử lý tốt nhất là gì?`,choices:[`Map it to the closest known status by guessing
VI: Đoán và gán vào trạng thái gần giống nhất`,`Return HTTP 500 so the carrier keeps retrying
VI: Trả HTTP 500 để hãng cứ gửi lại`,`Store the raw event, keep the status, alert the team
VI: Lưu sự kiện thô, giữ trạng thái cũ, báo cho team`,`Show "RTS-07" to the customer as the status
VI: Hiện "RTS-07" cho khách làm trạng thái`],answer:2,why:`You keep the data and do not invent a meaning. Then ask the carrier or the business what the code means. Add it to the table. A 500 makes the carrier retry an event you can never handle.
VI: Bạn giữ được dữ liệu và không tự bịa ý nghĩa. Sau đó hỏi hãng hoặc nghiệp vụ mã này nghĩa là gì rồi thêm vào bảng. Trả 500 khiến hãng gửi lại mãi một sự kiện bạn không xử lý được.`}]},{id:"logistics.last-mile",title:"Last-mile delivery · Giao hàng chặng cuối",summary:`Routes, delivery windows, proof of delivery and COD.
VI: Tuyến giao, khung giờ giao, bằng chứng giao hàng và thu hộ COD.`,minutes:10,level:"practical",blocks:[{type:"text",text:`In this lesson, you learn how COD cash and proof of delivery work.
VI: Trong bài này, bạn học cách xử lý tiền COD và bằng chứng giao hàng.`},{type:"text",text:`The **last mile** is the trip from the local hub to the customer’s door. It is often the most costly part per parcel. Each stop needs time to park, find the door and wait. Many stops mean a long day for one van.
VI: **Chặng cuối** (last mile) là đoạn từ bưu cục gần nhất đến tận cửa nhà khách. Đây thường là phần tốn kém nhất tính trên mỗi kiện. Mỗi điểm dừng cần thời gian đỗ xe, tìm cửa và chờ. Nhiều điểm dừng nghĩa là một ngày dài cho một xe.`},{type:"visual",svg:`<svg viewBox="0 0 360 176"><defs><marker id="lgD1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-solid" x="6" y="24" width="60" height="44" rx="8"/><text class="v-on-solid v-title" x="36" y="50" text-anchor="middle">Hub</text>
<line class="v-line" x1="66" y1="46" x2="90" y2="46" marker-end="url(#lgD1)"/>
<rect class="v-good" x="90" y="24" width="72" height="44" rx="8"/><text class="v-title" x="126" y="42" text-anchor="middle">Stop 1</text><text class="v-small" x="126" y="58" text-anchor="middle">OK + photo</text>
<line class="v-line" x1="162" y1="46" x2="180" y2="46" marker-end="url(#lgD1)"/>
<rect class="v-bad" x="180" y="24" width="72" height="44" rx="8"/><text class="v-title" x="216" y="42" text-anchor="middle">Stop 2</text><text class="v-small" x="216" y="58" text-anchor="middle">not home</text>
<line class="v-line" x1="252" y1="46" x2="270" y2="46" marker-end="url(#lgD1)"/>
<rect class="v-accent" x="270" y="24" width="72" height="44" rx="8"/><text class="v-title" x="306" y="42" text-anchor="middle">Stop 3</text><text class="v-small" x="306" y="58" text-anchor="middle">COD 450,000</text>
<line class="v-line" x1="306" y1="68" x2="306" y2="104" marker-end="url(#lgD1)"/>
<text class="v-muted v-small" x="296" y="92" text-anchor="end">end of the day</text>
<rect class="v-soft" x="10" y="106" width="340" height="52" rx="8"/><text class="v-title" x="180" y="128" text-anchor="middle">17:00 back at the hub</text><text class="v-small" x="180" y="146" text-anchor="middle">Cash + failed parcels back</text></svg>`,alt:"A van route. It leaves the hub and visits three stops. Stop 1 is delivered with a photo. Stop 2 fails because nobody is home. Stop 3 is a cash on delivery stop. At the end of the day, the van returns to the hub. It brings the cash and the failed parcels.",caption:`The van comes back with two things to deal with: cash and failed parcels.
VI: Xe quay về với hai việc cần xử lý: tiền mặt và kiện giao thất bại.`},{type:"list",items:[`Driver Hung loads 40 parcels at the Thu Duc hub at 08:00. 12 of them are COD.
VI: Tài xế Hùng nhận 40 kiện tại bưu cục Thủ Đức lúc 08:00. Trong đó có 12 kiện COD.`,`By 17:00, 34 are delivered and 6 failed. That is a 15% failure rate: 6 ÷ 40 = 0.15.
VI: Đến 17:00 giao được 34 kiện, thất bại 6 kiện. Tỷ lệ thất bại là 15%: 6 ÷ 40 = 0,15.`,`Hung collected cash for 12 COD parcels: 12 × 450,000 = 5,400,000 VND.
VI: Hùng thu tiền mặt của 12 kiện COD: 12 × 450.000 = 5.400.000 đồng.`,`Hung hands in the cash and 6 failed parcels. The hub scans each one.
VI: Hùng nộp tiền và 6 kiện thất bại. Bưu cục quét từng kiện.`]},{type:"example",title:"Hung’s 6 failed parcels",text:`Say each failed attempt wastes 20,000 VND of fuel and time. Six failures cost 6 × 20,000 = 120,000 VND in one day.
VI: Giả sử mỗi lần giao thất bại tốn 20.000 đồng xăng và công. Sáu lần thất bại tốn 6 × 20.000 = 120.000 đồng trong một ngày.
A call to the customer before the trip cuts this a lot. So does a delivery window.
VI: Gọi cho khách trước khi đi, và có khung giờ giao, sẽ giảm khoản này nhiều.`},{type:"text",text:`Common mistake: accept a driver tick as proof. Hung ticks "delivered" at the gate and the customer says "never got it". With an OTP or a photo at the door, the shop can answer the dispute.
VI: Lỗi hay gặp: coi dấu tích của tài xế là bằng chứng. Hùng bấm "đã giao" ở cổng và khách nói "tôi chưa nhận". Có OTP hoặc ảnh chụp tại cửa thì shop trả lời được khiếu nại.`},{type:"diagram",text:`HUB (bưu cục) 08:00 load the van
  │
  ├─► stop 1  09:10  OK    photo
  ├─► stop 2  09:40  FAIL  not home
  ├─► stop 3  10:05  OK    OTP
  ├─► stop 4  10:30  OK    COD 450,000
  │   ...
  └─► back to HUB 17:00
      with cash + failed parcels`},{type:"list",items:[`**Route planning**: put stops in a smart order to save time and fuel.
VI: **Lập tuyến**: sắp xếp điểm giao hợp lý để tiết kiệm thời gian và xăng.`,`**Delivery window**: the time range the customer expects, for example 9:00–12:00.
VI: **Khung giờ giao**: khoảng thời gian khách chờ nhận, ví dụ 9:00–12:00.`,`**Proof of delivery** (POD): a photo, a signature, or an OTP code.
VI: **Bằng chứng giao hàng** (POD): ảnh chụp, chữ ký, hoặc mã OTP.`,`**OTP**: a one-time code sent to the customer’s phone. The driver must enter it.
VI: **OTP**: mã dùng một lần gửi tới điện thoại khách. Tài xế phải nhập mã này.`]},{type:"text",text:`**COD** (cash on delivery, thu hộ) works like this. The customer pays cash to the driver. The carrier keeps the money, then transfers it to the shop later, minus fees.
VI: **COD** (thu hộ) hoạt động như sau. Khách trả tiền mặt cho tài xế. Hãng giữ tiền, sau đó chuyển cho shop, đã trừ phí.
So the money sits with two other parties before it reaches the shop.
VI: Vì vậy tiền nằm ở hai bên khác trước khi về tới shop.`},{type:"visual",svg:`<svg viewBox="0 0 360 216"><defs><marker id="lgD2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-box" x="10" y="14" width="230" height="32" rx="8"/><text class="v-title" x="22" y="35">Customer pays cash</text><text class="v-title" x="252" y="35">5,400,000</text>
<line class="v-line" x1="125" y1="46" x2="125" y2="62" marker-end="url(#lgD2)"/>
<rect class="v-box" x="10" y="62" width="230" height="32" rx="8"/><text class="v-title" x="22" y="83">Driver holds the cash</text><text class="v-title" x="252" y="83">5,400,000</text>
<line class="v-line" x1="125" y1="94" x2="125" y2="110" marker-end="url(#lgD2)"/>
<rect class="v-warn" x="10" y="110" width="230" height="32" rx="8"/><text class="v-title" x="22" y="131">Carrier holds the money</text><text class="v-title" x="252" y="131">5,400,000</text>
<line class="v-line" x1="125" y1="142" x2="125" y2="158" marker-end="url(#lgD2)"/><text class="v-small" x="138" y="154">minus fee</text>
<rect class="v-good" x="10" y="158" width="230" height="32" rx="8"/><text class="v-title" x="22" y="179">Shop gets the transfer</text><text class="v-title" x="252" y="179">5,292,000</text>
<text class="v-muted v-small" x="10" y="208">Fee (example 2%): 108,000</text></svg>`,alt:"Four boxes in a column, linked by arrows. The customer pays 5,400,000 VND cash. The driver and then the carrier hold it. The shop receives 5,292,000 VND after a 2 percent example fee.",caption:`Cash passes three hands before the shop gets it, minus a fee.
VI: Tiền đi qua ba bên trước khi shop nhận, đã trừ phí.`},{type:"diagram",text:`Customer ─cash─► Driver ─► Carrier
                                │
            statement (bảng kê) │ transfer
            per tracking no     │ minus fees
                                ▼
                               Shop
Shop checks each parcel:
 expected COD = collected = paid out?`},{type:"example",title:"Hung’s COD in numbers",text:`The fee in the picture is 2%. It is 5,400,000 × 0.02 = 108,000 VND. The shop should receive 5,400,000 − 108,000 = 5,292,000 VND.
VI: Phí trong hình là 2% của 5.400.000 = 5.400.000 × 0,02 = 108.000 đồng. Shop nên nhận 5.400.000 − 108.000 = 5.292.000 đồng.`},{type:"text",text:`A shop sends 2,000 COD parcels a week. One week the carrier sent one lump sum with a file. The total matched the file. But 3 delivered parcels were not in the file at all. Only a check per parcel finds them.
VI: Một shop gửi 2.000 kiện COD mỗi tuần. Có tuần, hãng chuyển một khoản tổng kèm file bảng kê. Tổng tiền khớp với file. Nhưng có 3 kiện đã giao không hề có trong file. Chỉ đối soát từng kiện mới tìm ra.`},{type:"code",code:{lang:"sql",text:`-- COD reconciliation (đối soát COD)
SELECT s.TrackingNo, s.CodAmount,
       c.CollectedAmount, c.FeeAmount
FROM Shipments s
LEFT JOIN CarrierCodLines c
  ON c.TrackingNo = s.TrackingNo
WHERE s.Status = 'DELIVERED'
  AND s.CodAmount > 0
  AND (c.TrackingNo IS NULL
    OR c.CollectedAmount <> s.CodAmount);`}},{type:"exercise",title:`Find the missing COD parcel
VI: Tìm kiện COD bị thiếu`,task:`The shop shipped three COD parcels. TR-101 is 300,000 VND. TR-102 is 450,000 VND. TR-103 is 275,000 VND. The carrier file lists only TR-101 and TR-103, with a total of 575,000 VND. Which parcel is missing, and how much money is missing?
VI: Shop gửi ba kiện COD. TR-101 là 300.000 đồng. TR-102 là 450.000 đồng. TR-103 là 275.000 đồng. File của hãng chỉ có TR-101 và TR-103, tổng 575.000 đồng. Kiện nào bị thiếu, và thiếu bao nhiêu tiền?`,hint:`Add the three COD amounts from your own list. Then subtract the carrier total.
VI: Cộng ba số tiền COD trong danh sách của shop. Sau đó trừ đi tổng của hãng.`,solution:`Your list: 300,000 + 450,000 + 275,000 = 1,025,000 VND. Carrier file: 575,000 VND. Difference: 1,025,000 − 575,000 = 450,000 VND. The missing parcel is TR-102, worth 450,000 VND.
VI: Danh sách của shop: 300.000 + 450.000 + 275.000 = 1.025.000 đồng. File hãng: 575.000 đồng. Chênh lệch: 1.025.000 − 575.000 = 450.000 đồng. Kiện bị thiếu là TR-102, trị giá 450.000 đồng.`},{type:"text",text:`Reconciliation (đối soát) means matching two lists. Here the two lists are your own COD list and the carrier statement. Match each parcel, not only the total.
VI: Đối soát là so khớp hai danh sách. Ở đây là danh sách COD của shop và bảng kê của hãng. Hãy khớp từng kiện, không chỉ khớp tổng.`},{type:"text",text:`Ask the business: can the customer open the parcel before paying? Who pays if the customer refuses? How often does the carrier pay out? What if the customer pays only part?
VI: Cần hỏi nghiệp vụ: khách có được mở hàng trước khi trả tiền không? Khách từ chối nhận thì ai chịu phí? Hãng chuyển tiền COD bao lâu một lần? Khách chỉ trả một phần thì sao?`}],remember:`COD money is with the carrier until it is paid out. Reconcile per tracking number, not only the total.
VI: Tiền COD nằm ở hãng cho đến khi hãng chuyển trả. Đối soát theo từng mã vận đơn, không chỉ so tổng.`,questions:[{id:"logistics.last-mile.1",kind:"compare",difficulty:"medium",prompt:`A customer says "I never got it", but the driver marked it delivered. Which proof best shows the right person received it?
VI: Khách nói "tôi chưa nhận", nhưng tài xế đã báo giao xong. Bằng chứng nào cho thấy rõ nhất là đúng người đã nhận?`,choices:[`The driver ticked "delivered" in the app
VI: Tài xế bấm "đã giao" trên app`,`An OTP sent to the customer’s phone and typed in
VI: Mã OTP gửi tới điện thoại khách và được nhập vào`,`The time stamp of the delivery event
VI: Mốc thời gian của sự kiện giao hàng`,`An SMS sent to the customer after delivery
VI: Tin SMS gửi cho khách sau khi giao`],answer:1,why:`Only the person with the customer’s phone can give the OTP. A tick or a time stamp only shows what the driver did. An SMS after delivery proves nothing about who received it.
VI: Chỉ người cầm điện thoại của khách mới đọc được mã OTP. Dấu tích hay mốc thời gian chỉ cho thấy tài xế đã làm gì. SMS gửi sau không chứng minh ai đã nhận.`},{id:"logistics.last-mile.2",kind:"debug",difficulty:"hard",prompt:`Each week, finance checks the carrier transfer. It equals the total in the carrier’s COD file. It always matches. Yet the bank balance is short. Why?
VI: Mỗi tuần kế toán kiểm tra tiền hãng chuyển bằng tổng trong file COD của hãng. Luôn khớp. Nhưng tiền thực nhận vẫn thiếu. Vì sao?`,choices:[`The bank rounds each transfer down to the nearest thousand
VI: Ngân hàng làm tròn xuống mỗi khoản chuyển`,`Some delivered parcels are missing from the carrier’s file
VI: Một số kiện đã giao không có trong file của hãng`,`The carrier charges COD fees twice for every parcel
VI: Hãng tính phí COD hai lần cho mỗi kiện`],answer:1,why:`Comparing the transfer with the carrier’s own file only checks the carrier against itself. You must compare the file with your own list of delivered COD parcels.
VI: So tiền chuyển với file của chính hãng chỉ là hãng tự khớp với hãng. Phải so file đó với danh sách kiện COD đã giao trong hệ thống của mình.`,remember:"Reconcile against your own data, not the other side’s total."},{id:"logistics.last-mile.3",kind:"truefalse",difficulty:"easy",prompt:`When a COD parcel is marked delivered, the money is already in the shop’s bank.
VI: Khi kiện COD được báo đã giao, tiền đã nằm trong tài khoản ngân hàng của shop.`,choices:["True","False"],answer:1,why:`The driver and then the carrier hold the cash. The shop gets it later, minus fees. So track "collected" and "paid out" as separate states.
VI: Tài xế rồi đến hãng giữ tiền mặt. Shop nhận sau, đã trừ phí. Vì vậy hãy theo dõi "đã thu" và "đã chuyển trả" là hai trạng thái riêng.`},{id:"logistics.last-mile.4",kind:"mcq",difficulty:"easy",prompt:`What is a "delivery window"?
VI: "Khung giờ giao" là gì?`,choices:["The time range when the customer expects the parcel","The window in the van where parcels are handed out","The number of days before an unpaid order is cancelled","The screen where the driver scans each parcel"],answer:0,why:`A delivery window is a promised time range, for example 9:00–12:00. Route planning must respect it.
VI: Khung giờ giao là khoảng thời gian đã hứa với khách, ví dụ 9:00–12:00. Lập tuyến phải tuân theo khung này.`}]},{id:"logistics.warehouse",title:"Warehouse fulfillment · Xử lý đơn tại kho",summary:`Receive, put away, pick, pack and ship before the cut-off.
VI: Nhận hàng, cất lên kệ, lấy hàng, đóng gói và giao trước giờ chốt.`,minutes:10,level:"practical",blocks:[{type:"text",text:`In this lesson, you learn to pick orders before the truck leaves.
VI: Trong bài này, bạn học cách lấy hàng kịp trước giờ xe đi.`},{type:"text",text:`**Fulfillment** (xử lý đơn) is every step from a paid order to a shipped box. **Inbound** (nhập) brings goods into the warehouse. **Outbound** (xuất) sends orders out.
VI: **Fulfillment** (xử lý đơn) là mọi bước từ đơn đã thanh toán đến kiện đã bàn giao. **Inbound** (nhập) là đưa hàng vào kho. **Outbound** (xuất) là đưa đơn ra khỏi kho.`},{type:"diagram",text:`INBOUND (nhập)        OUTBOUND (xuất)
Truck arrives         Order arrives
  ↓                     ↓
Receive + check       Pick (lấy hàng)
  ↓                     ↓
Putaway (cất kệ)      Pack (đóng gói)
  ↓                     ↓
Bin A-03-2 ──stock──► Ship (bàn giao)

Cross-dock:
Truck in ──────────────────► Truck out
  (no putaway, hours not days)`},{type:"text",text:`**Putaway** means placing received goods in a storage spot. That spot is called a **bin** (ô kệ), like A-03-2. The worker scans the bin and the item. Then the system knows exactly where the stock is.
VI: **Putaway** là cất hàng đã nhận vào một vị trí lưu trữ gọi là **bin** (ô kệ), ví dụ A-03-2. Nhân viên quét mã ô kệ và mã hàng. Nhờ vậy hệ thống biết chính xác hàng nằm ở đâu.`},{type:"text",text:`Plan backwards from the truck. Start at the carrier pickup time. Subtract the time for packing, picking and release. The result is the cut-off time.
VI: Hãy lập kế hoạch ngược từ xe. Bắt đầu từ giờ hãng đến lấy hàng. Trừ đi thời gian đóng gói, lấy hàng và thả đợt. Kết quả là giờ chốt đơn.`},{type:"visual",svg:`<svg viewBox="0 0 360 150"><defs><marker id="lgE1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<text class="v-muted v-small" x="180" y="16" text-anchor="middle">Plan back from the truck</text>
<rect class="v-warn" x="8" y="28" width="76" height="52" rx="8"/><text class="v-title" x="46" y="50" text-anchor="middle">Cut-off</text><text class="v-small" x="46" y="68" text-anchor="middle">12:00</text>
<line class="v-line" x1="84" y1="54" x2="96" y2="54" marker-end="url(#lgE1)"/>
<rect class="v-box" x="96" y="28" width="76" height="52" rx="8"/><text class="v-title" x="134" y="50" text-anchor="middle">Pick</text><text class="v-small" x="134" y="68" text-anchor="middle">13:00-14:40</text>
<line class="v-line" x1="172" y1="54" x2="184" y2="54" marker-end="url(#lgE1)"/>
<rect class="v-box" x="184" y="28" width="76" height="52" rx="8"/><text class="v-title" x="222" y="50" text-anchor="middle">Pack</text><text class="v-small" x="222" y="68" text-anchor="middle">to 14:50</text>
<line class="v-line" x1="260" y1="54" x2="272" y2="54" marker-end="url(#lgE1)"/>
<rect class="v-solid" x="272" y="28" width="80" height="52" rx="8"/><text class="v-on-solid v-title" x="312" y="50" text-anchor="middle">Truck</text><text class="v-on-solid v-small" x="312" y="68" text-anchor="middle">15:00</text>
<rect class="v-soft" x="8" y="98" width="344" height="40" rx="8"/><text class="v-small" x="180" y="115" text-anchor="middle">Wave released at 13:00.</text><text class="v-muted v-small" x="180" y="130" text-anchor="middle">Late orders: next wave.</text></svg>`,alt:"A timeline of four boxes. Cut-off is at 12:00. Pick runs 13:00 to 14:40. Pack ends at 14:50. The carrier truck comes at 15:00. A note says the wave is released at 13:00. Late orders join the next wave.",caption:`Each step has a deadline that comes from the truck time.
VI: Mỗi bước có hạn chót, tính ngược từ giờ xe đến.`},{type:"list",items:[`An Khang Cosmetics has 600 orders paid by the 12:00 cut-off. The truck comes at 15:00.
VI: An Khang Cosmetics có 600 đơn đã thanh toán trước giờ chốt 12:00. Xe đến lúc 15:00.`,`Single picking takes 3 minutes per order: 600 × 3 = 1,800 minutes. With 8 pickers that is 1,800 ÷ 8 = 225 minutes, or 3 h 45.
VI: Lấy từng đơn mất 3 phút mỗi đơn: 600 × 3 = 1.800 phút. Với 8 người là 1.800 ÷ 8 = 225 phút, tức 3 giờ 45.`,`Batch picking: 40 batches of 15 orders. Each takes 20 minutes: 40 × 20 = 800 minutes. With 8 pickers: 800 ÷ 8 = 100 minutes.
VI: Lấy gộp: 40 mẻ, mỗi mẻ 15 đơn, 20 phút một mẻ: 40 × 20 = 800 phút. Với 8 người: 800 ÷ 8 = 100 phút.`,`Released at 13:00, batch picking ends at 14:40. Single picking ends at 16:45 and misses the truck.
VI: Thả đợt lúc 13:00, lấy gộp xong lúc 14:40. Lấy từng đơn xong lúc 16:45 và lỡ xe.`]},{type:"visual",svg:`<svg viewBox="0 0 360 200">
<text class="v-muted v-small" x="180" y="14" text-anchor="middle">600 orders, 8 pickers</text>
<rect class="v-bad" x="30" y="48" width="281" height="24" rx="6"/>
<rect class="v-good" x="30" y="108" width="125" height="24" rx="6"/>
<line class="v-flow" x1="180" y1="48" x2="180" y2="170"/>
<text class="v-title" x="30" y="42">Single: 225 min</text>
<text class="v-muted v-small" x="340" y="88" text-anchor="end">ends 16:45, misses truck</text>
<text class="v-title" x="30" y="102">Batch: 100 min</text>
<text class="v-muted v-small" x="30" y="148">ends 14:40, on time</text>
<text class="v-small" x="186" y="164">15:00 truck</text>
<line class="v-line" x1="30" y1="176" x2="330" y2="176"/>
<text class="v-muted v-small" x="30" y="190">13:00</text><text class="v-muted v-small" x="330" y="190" text-anchor="end">17:00</text></svg>`,alt:"A timeline from 13:00 to 17:00 with a dashed line for the 15:00 truck. A long red bar shows single picking ending at 16:45, after the truck. A short green bar shows batch picking ending at 14:40, before it.",caption:`Batch picking ends before the truck. Single picking misses it.
VI: Lấy gộp xong trước khi xe đến. Lấy từng đơn thì lỡ xe.`},{type:"example",title:"An Khang’s batch plan",text:`Single picking: 1,800 ÷ 8 = 225 minutes. Batch picking: 800 ÷ 8 = 100 minutes. The difference is 225 − 100 = 125 minutes, about 2 hours.
VI: Lấy từng đơn: 1.800 ÷ 8 = 225 phút. Lấy gộp: 800 ÷ 8 = 100 phút. Chênh lệch là 225 − 100 = 125 phút, khoảng 2 giờ.
Batch picking is the only one that makes the 15:00 truck with time to spare.
VI: Chỉ lấy gộp mới kịp xe 15:00 và còn thời gian dư.`},{type:"text",text:`Common mistake: set the cut-off equal to the truck time. If paid orders are accepted until 15:00, nobody has time to pick and pack. Set the cut-off early enough for the whole chain.
VI: Lỗi hay gặp: đặt giờ chốt bằng giờ xe đến. Nếu nhận đơn đã thanh toán đến 15:00 thì không ai kịp lấy và đóng gói. Hãy đặt giờ chốt đủ sớm cho cả chuỗi.`},{type:"text",text:`**Cross-docking** (cross-dock) moves goods from an inbound truck to an outbound truck. It has little or no storage. It saves space and time. It needs exact timing between the two trucks.
VI: **Cross-docking** là chuyển hàng từ xe nhập sang xe xuất, gần như không lưu kho. Cách này tiết kiệm diện tích và thời gian. Nó đòi hỏi giờ xe đến và xe đi phải khớp chính xác.`},{type:"diagram",text:`Single:  O1 ─walk─► O2 ─walk─► O3
         3 walks through the shelves

Batch:   O1 + O2 + O3 in one walk
         sort table → O1 | O2 | O3

Wave:    13:00 release all orders
         for the 15:00 truck pickup`},{type:"list",items:[`**Single order picking**: one picker, one order. Simple, but a lot of walking.
VI: **Lấy theo từng đơn**: một người lấy một đơn. Đơn giản nhưng đi lại nhiều.`,`**Batch picking**: one walk collects items for many orders. They are sorted after.
VI: **Lấy gộp**: một lượt đi lấy hàng cho nhiều đơn, sau đó chia lại theo đơn.`,`**Wave picking**: release a group of orders at a set time. For example, release them per carrier pickup.
VI: **Lấy theo đợt**: thả một nhóm đơn vào giờ định sẵn, ví dụ theo giờ hãng đến lấy hàng.`]},{type:"text",text:`The **cut-off time** (giờ chốt đơn) is a promise like "paid before 14:00, shipped today". It must leave enough time before the carrier pickup. Store it per warehouse and carrier, not in code.
VI: **Giờ chốt đơn** là cam kết như "thanh toán trước 14:00 thì giao cho hãng trong ngày". Phải chừa đủ thời gian trước giờ hãng đến lấy. Hãy lưu theo từng kho và từng hãng, không ghi cứng trong code. On a sale day, one shop may get 10,000 orders by noon.
VI: Ngày sale, một shop có thể nhận 10.000 đơn trước buổi trưa.`},{type:"code",code:{lang:"ts",text:`// paidAt must be in warehouse local time
function promisedShipDate(
  paidAtLocal: Date, cutoffHour: number,
): Date {
  const d = new Date(paidAtLocal);
  if (d.getHours() >= cutoffHour) {
    d.setDate(d.getDate() + 1);
  }
  // skip Sundays and public holidays
  return nextWorkingDay(d);
}`}},{type:"exercise",title:`Batch or single picking
VI: Lấy gộp hay lấy từng đơn`,task:`A shop has 240 orders for one truck. Single picking takes 2.5 minutes per order. Batch picking uses batches of 12 orders, and each batch takes 15 minutes. Six pickers work at the same time. Which method is faster, and by how many minutes?
VI: Một shop có 240 đơn cho một xe. Lấy từng đơn mất 2,5 phút mỗi đơn. Lấy gộp theo mẻ 12 đơn, mỗi mẻ mất 15 phút. Sáu người lấy hàng cùng lúc. Cách nào nhanh hơn, và nhanh hơn bao nhiêu phút?`,hint:`Find the total minutes for each method, then divide by 6 pickers.
VI: Tính tổng số phút của mỗi cách, rồi chia cho 6 người.`,solution:`Single: 240 × 2.5 = 600 minutes, and 600 ÷ 6 = 100 minutes. Batch: 240 ÷ 12 = 20 batches. Each takes 15 minutes, so 20 × 15 = 300 minutes. Then 300 ÷ 6 = 50 minutes. Batch is faster by 100 − 50 = 50 minutes.
VI: Từng đơn: 240 × 2,5 = 600 phút, và 600 ÷ 6 = 100 phút. Gộp: 240 ÷ 12 = 20 mẻ. Mỗi mẻ 15 phút, nên 20 × 15 = 300 phút. Sau đó 300 ÷ 6 = 50 phút. Lấy gộp nhanh hơn 100 − 50 = 50 phút.`},{type:"exercise",title:`Latest cut-off time
VI: Giờ chốt đơn muộn nhất`,task:`The truck leaves at 15:00. Picking and packing need 100 minutes with the current team. Add a 20-minute buffer for the final check. What is the latest cut-off time?
VI: Xe rời kho lúc 15:00. Lấy hàng và đóng gói cần 100 phút với đội hiện tại. Thêm 20 phút dự phòng để kiểm tra cuối. Giờ chốt đơn muộn nhất là mấy giờ?`,hint:`Add the buffer to the work time. Then count back from 15:00.
VI: Cộng thời gian dự phòng vào thời gian làm việc. Sau đó đếm ngược từ 15:00.`,solution:`Total time before the truck: 100 + 20 = 120 minutes, which is 2 hours. Count back from 15:00: 15:00 − 2 h = 13:00. The latest cut-off is 13:00.
VI: Tổng thời gian trước khi xe đi: 100 + 20 = 120 phút, tức 2 giờ. Đếm ngược từ 15:00: 15:00 − 2 giờ = 13:00. Giờ chốt đơn muộn nhất là 13:00.`},{type:"text",text:`On a sale day, three carriers pick up at 15:00, 17:00 and 19:00. The warehouse runs one wave per pickup. Each wave holds only the orders for that carrier.
VI: Ngày sale, ba hãng đến lấy hàng lúc 15:00, 17:00 và 19:00. Kho chạy một đợt cho mỗi giờ lấy. Mỗi đợt chỉ gồm đơn của hãng đó.`}],remember:`Scan every move into a bin. Pick in batches or waves. Plan backwards from the carrier pickup.
VI: Quét mã mọi lần cất hàng vào ô kệ, lấy hàng gộp hoặc theo đợt, và lập kế hoạch ngược từ giờ hãng đến lấy.`,questions:[{id:"logistics.warehouse.1",kind:"compare",difficulty:"medium",prompt:`There are 500 small orders. Each has 1–2 items from the same 20 popular products. Which picking method is usually best?
VI: Có 500 đơn nhỏ. Mỗi đơn 1–2 món từ cùng 20 sản phẩm bán chạy. Cách lấy hàng nào thường tốt nhất?`,choices:["Single order: one walk per order","Batch: one walk for many orders, then sort","Cross-dock: send them straight to the truck"],answer:1,why:`The same few products repeat across many orders. One walk can collect them all, which saves a lot of walking. Cross-docking is for inbound goods, not for picking stock.
VI: Cùng vài sản phẩm lặp lại trong rất nhiều đơn. Một lượt đi có thể lấy đủ, đỡ đi lại rất nhiều. Cross-docking dành cho hàng vừa nhập, không phải để lấy hàng tồn.`},{id:"logistics.warehouse.2",kind:"debug",difficulty:"hard",prompt:`The cut-off is 14:00 Vietnam time. Orders paid between 14:00 and 21:00 still promise "ships today". The server runs in UTC. Why?
VI: Giờ chốt là 14:00 giờ Việt Nam. Đơn thanh toán từ 14:00 đến 21:00 vẫn hứa "giao trong ngày". Máy chủ chạy giờ UTC. Vì sao?`,code:{lang:"ts",text:`const paid = new Date(order.paidAtUtc);
if (paid.getHours() >= 14) {
  // ship tomorrow
}`},choices:["getHours() reads UTC hours, not Vietnam hours","The check should use > instead of >= for 14:00","new Date() cannot parse a UTC date string","The cut-off hour was not loaded from settings"],answer:0,why:`On a UTC server, 15:00 in Vietnam is 08:00 UTC. So the check sees 8 and says "today". Convert to the warehouse time zone before comparing with the cut-off.
VI: Trên máy chủ UTC, 15:00 giờ Việt Nam là 08:00 UTC, nên điều kiện thấy 8 và báo "hôm nay". Hãy đổi sang múi giờ của kho trước khi so với giờ chốt.`,remember:"Compare cut-offs in the warehouse’s local time."},{id:"logistics.warehouse.3",kind:"mcq",difficulty:"easy",prompt:`What is cross-docking?
VI: Cross-docking là gì?`,choices:["Moving goods from inbound to outbound with little storage","Counting stock in two warehouses at the same time","Packing two orders into one box to save on shipping","Moving stock from one shelf to another every night"],answer:0,why:`Goods arrive and leave again quickly, without a normal putaway. It is common for stores that get daily deliveries from a central hub.
VI: Hàng đến rồi đi ngay, không cất kệ như bình thường. Cách này hay dùng cho các cửa hàng nhận hàng hằng ngày từ kho trung tâm.`},{id:"logistics.warehouse.4",kind:"scenario",difficulty:"medium",prompt:`The system says bin A-03-2 has 20 units. Pickers often find it empty, and the goods are on another shelf. Which rule fixes this?
VI: Hệ thống báo ô A-03-2 có 20 cái. Người lấy hàng thường thấy ô trống, còn hàng lại nằm ở kệ khác. Quy tắc nào khắc phục việc này?`,choices:[`Scan both the bin and the item at every putaway
VI: Quét cả mã ô kệ và mã hàng mỗi lần cất hàng`,`Count the whole warehouse once a year
VI: Kiểm kê toàn kho mỗi năm một lần`,`Let pickers choose any bin that has free space
VI: Cho người lấy hàng chọn ô nào còn chỗ trống`],answer:0,why:`The stock is real but the location is wrong. Scanning the bin at putaway makes the system record where the goods really went. A yearly count finds the problem far too late.
VI: Hàng có thật nhưng vị trí bị sai. Quét mã ô kệ khi cất giúp hệ thống ghi đúng chỗ hàng được đặt. Kiểm kê mỗi năm thì phát hiện quá trễ.`}]},{id:"logistics.incoterms",title:"Import, export and Incoterms · Xuất nhập khẩu và Incoterms",summary:`Who pays for each part of the trip, and who takes the risk.
VI: Ai trả tiền từng chặng, và ai chịu rủi ro.`,minutes:12,level:"expert",blocks:[{type:"text",text:`In this lesson, you learn who pays and who takes the risk.
VI: Trong bài này, bạn học ai trả tiền và ai chịu rủi ro khi hàng đi quốc tế.`},{type:"text",text:`**Incoterms** (điều kiện thương mại quốc tế) are standard trade terms published by the ICC. Many contracts use the 2020 version. Each term says who pays for each part of the trip. It also says where the **risk** moves from the seller to the buyer.
VI: **Incoterms** (điều kiện thương mại quốc tế) là các điều kiện chuẩn do ICC ban hành. Nhiều hợp đồng dùng bản 2020. Mỗi điều kiện quy định ai trả tiền cho từng chặng. Nó cũng quy định **rủi ro** chuyển từ người bán sang người mua ở đâu.
Risk means who loses money if the goods are damaged or lost.
VI: Rủi ro là ai chịu thiệt nếu hàng bị hỏng hoặc mất.`},{type:"text",text:`Check two things for every term. First, who pays each cost? Second, at which point does the risk move? Cost and risk can move at different points. Always read the term in your own contract, because the contract decides the details.
VI: Hãy kiểm tra hai điều cho mỗi điều kiện. Thứ nhất, ai trả từng chi phí? Thứ hai, rủi ro chuyển tại điểm nào? Chi phí và rủi ro có thể chuyển ở hai điểm khác nhau. Hãy đọc điều kiện trong hợp đồng của bạn, vì hợp đồng quyết định các chi tiết.`},{type:"diagram",text:`Seller ─► Port A ═ship═► Port B ─► Buyer
  ▲         ▲                        ▲
 EXW     FOB, CIF                   DDP
   risk moves to the buyer here

Term  Seller pays up to   Risk moves at
EXW   nothing, goods      seller’s door
      ready at the door
FOB   loading on ship     on board, A
CIF   freight + insur.    on board, A
      to Port B
DDP   everything, incl.   buyer’s door
      import duty`},{type:"visual",svg:`<svg viewBox="0 0 360 232">
<text class="v-muted v-small" x="120" y="34" text-anchor="middle">Seller</text><text class="v-muted v-small" x="200" y="34" text-anchor="middle">Port A</text><text class="v-muted v-small" x="280" y="34" text-anchor="middle">Port B</text><text class="v-muted v-small" x="340" y="34" text-anchor="middle">Buyer</text>
<line class="v-line" x1="120" y1="70" x2="340" y2="70"/>
<line class="v-line" x1="120" y1="108" x2="340" y2="108"/>
<rect class="v-good" x="120" y="102" width="80" height="12" rx="3"/>
<line class="v-line" x1="120" y1="146" x2="340" y2="146"/>
<rect class="v-good" x="120" y="140" width="160" height="12" rx="3"/>
<line class="v-line" x1="120" y1="184" x2="340" y2="184"/>
<rect class="v-good" x="120" y="178" width="220" height="12" rx="3"/>
<circle class="v-bad" cx="120" cy="70" r="7"/>
<circle class="v-bad" cx="200" cy="108" r="7"/>
<circle class="v-bad" cx="200" cy="146" r="7"/>
<circle class="v-bad" cx="340" cy="184" r="7"/>
<text class="v-title" x="10" y="75">EXW</text>
<text class="v-title" x="10" y="113">FOB</text>
<text class="v-title" x="10" y="151">CIF</text>
<text class="v-title" x="10" y="189">DDP</text>
<text class="v-muted v-small" x="10" y="214">Green bar: seller pays.</text><text class="v-muted v-small" x="10" y="228">Red dot: risk moves.</text></svg>`,alt:"Four rows for four terms, drawn on one trip from seller to buyer. Green bars show how far the seller pays. Red dots show where the risk moves. For CIF the bar ends at Port B and the dot is at Port A.",caption:`The green bar and the red dot can sit in different places.
VI: Thanh xanh và chấm đỏ có thể nằm ở hai chỗ khác nhau.`},{type:"text",text:`The classic trap is **CIF** (cost, insurance, freight). The seller pays freight and insurance to Port B. But the risk moves to the buyer at Port A. That is when the goods are on board. So the cost point and the risk point are different.
VI: Cái bẫy kinh điển là **CIF** (cost, insurance, freight). Người bán trả cước và bảo hiểm đến cảng B. Nhưng rủi ro chuyển sang người mua ngay tại cảng A, khi hàng đã lên tàu. Vậy điểm chịu chi phí và điểm chuyển rủi ro khác nhau.`},{type:"visual",svg:`<svg viewBox="0 0 360 196"><defs><marker id="lgF1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-good" x="10" y="14" width="250" height="32" rx="8"/><text class="v-title" x="135" y="35" text-anchor="middle">CIF: seller pays to Port B</text>
<rect class="v-box" x="10" y="68" width="70" height="36" rx="8"/><text class="v-title" x="45" y="91" text-anchor="middle">Seller</text>
<line class="v-line" x1="80" y1="86" x2="100" y2="86" marker-end="url(#lgF1)"/>
<rect class="v-box" x="100" y="68" width="70" height="36" rx="8"/><text class="v-title" x="135" y="91" text-anchor="middle">Port A</text>
<line class="v-flow" x1="170" y1="86" x2="190" y2="86" marker-end="url(#lgF1)"/>
<rect class="v-box" x="190" y="68" width="70" height="36" rx="8"/><text class="v-title" x="225" y="91" text-anchor="middle">Port B</text>
<line class="v-line" x1="260" y1="86" x2="280" y2="86" marker-end="url(#lgF1)"/>
<rect class="v-box" x="280" y="68" width="70" height="36" rx="8"/><text class="v-title" x="315" y="91" text-anchor="middle">Buyer</text>
<line class="v-line" x1="135" y1="128" x2="135" y2="106" marker-end="url(#lgF1)"/>
<rect class="v-bad" x="50" y="130" width="170" height="40" rx="8"/><text class="v-title" x="135" y="147" text-anchor="middle">Risk moves here</text><text class="v-small" x="135" y="162" text-anchor="middle">goods on board at Port A</text>
<text class="v-muted v-small" x="180" y="188" text-anchor="middle">Cost point ≠ risk point</text></svg>`,alt:"A row of four boxes: Seller, Port A, Port B, Buyer. A green bar runs from Seller to Port B. It shows the seller pays freight and insurance up to Port B. A red box under Port A shows the risk moves to the buyer there.",caption:`With CIF the seller pays to Port B, but the risk moves at Port A.
VI: Với CIF người bán trả đến cảng B, nhưng rủi ro chuyển ở cảng A.`},{type:"list",items:[`Viet Precision in Hanoi buys machine parts from Osaka for USD 48,000, CIF Hai Phong.
VI: Việt Precision ở Hà Nội mua linh kiện máy từ Osaka giá 48.000 USD, điều kiện CIF Hải Phòng.`,`3 March: the parts are loaded on the ship at Osaka. The risk is now with the buyer.
VI: Ngày 3/3: hàng lên tàu ở Osaka. Từ lúc này rủi ro thuộc người mua.`,`6 March: a storm damages parts worth USD 9,000. The buyer files an insurance claim.
VI: Ngày 6/3: bão làm hỏng số hàng trị giá 9.000 USD. Người mua nộp yêu cầu bồi thường bảo hiểm.`,`The seller bought the policy under CIF. The claim goes to the insurer, not to the seller.
VI: Người bán đã mua bảo hiểm theo CIF. Yêu cầu bồi thường gửi cho công ty bảo hiểm, không gửi cho người bán.`]},{type:"example",title:"Viet Precision’s landed cost",text:`The CIF price is USD 48,000. Assume local port fees and trucking are USD 1,200 (an example number). Cost before import duty: 48,000 + 1,200 = 49,200 USD.
VI: Giá CIF là 48.000 USD. Giả sử phí cảng và vận chuyển nội địa là 1.200 USD (số ví dụ). Chi phí trước thuế nhập khẩu: 48.000 + 1.200 = 49.200 USD.
Import duty comes on top. Its rate depends on the HS code and the current tariff, so check both.
VI: Thuế nhập khẩu được cộng thêm. Thuế suất tùy mã HS và biểu thuế hiện hành, nên hãy kiểm tra cả hai.`},{type:"text",text:`**Lead time** (thời gian chờ hàng) is the total time. It runs from order to goods ready to sell. Viet Precision plans a 7-day sea trip. But the real lead time is 34 days. The steps are: production 20, inland transport 2, sea 7, customs 3, delivery 2. 20 + 2 + 7 + 3 + 2 = 34.
VI: **Lead time** (thời gian chờ hàng) là tổng thời gian từ lúc đặt đến lúc hàng sẵn sàng bán. Việt Precision lập kế hoạch 7 ngày đi biển. Nhưng lead time thật là 34 ngày: sản xuất 20, vận chuyển nội địa 2, đường biển 7, thông quan 3, giao hàng 2. 20 + 2 + 7 + 3 + 2 = 34.`},{type:"text",text:`Common mistake: think "the seller pays freight, so the seller carries the risk". Under CIF that is wrong. Check the Incoterm before you promise a stock date or accept a damaged shipment.
VI: Lỗi hay gặp: nghĩ rằng "người bán trả cước thì người bán chịu rủi ro". Với CIF thì sai. Hãy kiểm tra Incoterm trước khi hứa ngày có hàng hoặc nhận một lô hàng bị hỏng.`},{type:"text",text:`Most imports and exports need a **customs declaration** (tờ khai hải quan). In Vietnam it is filed electronically. Each product line needs an **HS code** (mã HS). It is an international code for the type of goods. The first 6 digits are the same worldwide. Each country adds more digits.
VI: Hầu hết lô hàng xuất nhập khẩu cần **tờ khai hải quan**. Ở Việt Nam, tờ khai được nộp điện tử. Mỗi dòng hàng cần **mã HS** (mã HS): mã quốc tế phân loại hàng hóa. 6 số đầu giống nhau trên toàn thế giới. Mỗi nước thêm các số chi tiết hơn.`},{type:"text",text:`The HS code helps decide the duty rate. It can also decide which permits you need. Plan with the total lead time, not only the sea days. Check the current customs rules and the contract before you rely on any rate.
VI: Mã HS giúp quyết định thuế suất. Nó còn có thể quyết định cần giấy phép gì. Hãy lập kế hoạch theo tổng lead time, không chỉ số ngày đi biển. Trước khi dựa vào bất kỳ thuế suất nào, hãy kiểm tra quy định hải quan hiện hành và hợp đồng.`},{type:"exercise",title:`Compare two offers
VI: So sánh hai báo giá`,task:`Supplier A quotes USD 48,000 CIF Hai Phong. Supplier B quotes USD 45,000 FOB Osaka. Freight from Osaka to Hai Phong is USD 2,400, and insurance is USD 150. Before import duty and local costs, which offer is cheaper, and by how much?
VI: Nhà cung cấp A báo 48.000 USD, điều kiện CIF Hải Phòng. Nhà cung cấp B báo 45.000 USD, điều kiện FOB Osaka. Cước từ Osaka về Hải Phòng là 2.400 USD, bảo hiểm là 150 USD. Trước thuế nhập khẩu và chi phí nội địa, báo giá nào rẻ hơn, và rẻ hơn bao nhiêu?`,hint:`For the FOB offer, add the freight and insurance to the price. Then compare the two totals.
VI: Với báo giá FOB, cộng thêm cước và bảo hiểm vào giá. Sau đó so hai tổng.`,solution:`Supplier B total: 45,000 + 2,400 + 150 = 47,550 USD. Supplier A total: 48,000 USD. Offer B is cheaper by 48,000 − 47,550 = 450 USD. Duty and local costs can differ, so check them too.
VI: Tổng của B: 45.000 + 2.400 + 150 = 47.550 USD. Tổng của A: 48.000 USD. Báo giá B rẻ hơn 48.000 − 47.550 = 450 USD. Thuế và chi phí nội địa có thể khác nhau, nên cũng phải kiểm tra.`},{type:"text",text:`Ask the business: which Incoterm is on each purchase order? Who books the freight and the insurance? Who files the customs declaration? Check each answer against the contract.
VI: Cần hỏi nghiệp vụ: mỗi đơn mua có điều kiện Incoterm nào? Ai đặt cước và bảo hiểm? Ai nộp tờ khai hải quan? Hãy đối chiếu từng câu trả lời với hợp đồng.`},{type:"list",items:[`On the PO/SO: Incoterm and the named place, for example "FOB Cat Lai".
VI: Trên PO/SO: điều kiện Incoterm và địa điểm, ví dụ "FOB Cát Lái".`,`On the product: HS code and country of origin.
VI: Trên sản phẩm: mã HS và xuất xứ.`,`On the shipment: declaration number, ETD and ETA (planned departure and arrival).
VI: Trên lô hàng: số tờ khai, ETD và ETA (ngày đi và ngày đến dự kiến).`,`Documents: commercial invoice, packing list, bill of lading (vận đơn), certificate of origin (C/O).
VI: Chứng từ: hóa đơn thương mại, phiếu đóng gói, vận đơn (bill of lading), giấy chứng nhận xuất xứ (C/O).`]}],remember:`The Incoterm decides who pays and where the risk moves. With CIF, those two points are different.
VI: Điều kiện Incoterm quyết định ai trả tiền và rủi ro chuyển ở đâu. Với CIF, hai điểm đó khác nhau.`,questions:[{id:"logistics.incoterms.1",kind:"mcq",difficulty:"medium",prompt:`You buy goods **FOB** Shanghai. Who pays the main sea freight from Shanghai to Vietnam?
VI: Bạn mua hàng điều kiện **FOB** Thượng Hải. Ai trả cước biển chính từ Thượng Hải về Việt Nam?`,choices:["The seller","The buyer","The shipping line","Split 50/50"],answer:1,why:`Under FOB the seller pays until the goods are loaded on board. This happens at the named port. The buyer books and pays the main freight.
VI: Với FOB, người bán chịu phí đến khi hàng đã lên tàu tại cảng đi. Người mua thuê tàu và trả cước chặng chính.`},{id:"logistics.incoterms.2",kind:"scenario",difficulty:"hard",prompt:`You import under **CIF** Hai Phong. The goods are damaged at sea. Who carries the risk at that moment?
VI: Bạn nhập hàng điều kiện **CIF** Hải Phòng. Hàng bị hỏng trên biển. Lúc đó ai chịu rủi ro?`,choices:[`The seller, because the seller paid the freight
VI: Người bán, vì người bán đã trả cước`,`The buyer, but it can claim on the seller’s insurance
VI: Người mua, nhưng được đòi từ bảo hiểm người bán mua`,`The shipping line, in every case of sea damage
VI: Hãng tàu, trong mọi trường hợp hỏng trên biển`,`Nobody, until the goods clear customs in Vietnam
VI: Không ai, cho đến khi hàng thông quan ở Việt Nam`],answer:1,why:`Under CIF the risk moves when the goods are on board. That is at the port of shipment. Paying the freight does not keep the risk with the seller. The insurance the seller buys covers the buyer’s goods.
VI: Với CIF, rủi ro chuyển khi hàng đã lên tàu ở cảng đi. Trả cước không có nghĩa người bán còn chịu rủi ro. Bảo hiểm người bán mua là để bảo vệ hàng của người mua.`},{id:"logistics.incoterms.3",kind:"scenario",difficulty:"medium",prompt:`Your ERP stores only the unit price on purchase orders, not the Incoterm. What goes wrong first?
VI: ERP chỉ lưu đơn giá trên đơn mua hàng, không lưu Incoterm. Cái gì sai trước tiên?`,choices:[`Landed cost: you cannot tell if freight and duty are in the price
VI: Giá vốn nhập kho: không biết cước và thuế đã có trong giá chưa`,`HS code: customs cannot classify the product without the term
VI: Mã HS: hải quan không phân loại được hàng nếu thiếu điều kiện này`,`Supplier invoice: it can no longer be matched to the purchase order
VI: Hóa đơn nhà cung cấp: không còn đối chiếu được với đơn mua hàng`],answer:0,why:`An EXW price and a DDP price for the same goods are very different. Without the term you cannot tell which costs you still must add. So stock value and margin are wrong.
VI: Giá EXW và giá DDP cho cùng một hàng rất khác nhau. Không có điều kiện giao hàng thì không biết còn phải cộng chi phí nào. Vì vậy giá trị tồn kho và lợi nhuận bị sai.`},{id:"logistics.incoterms.4",kind:"truefalse",difficulty:"easy",prompt:`The HS code is chosen per supplier. So the same product can have a different HS code for each supplier.
VI: Mã HS được chọn theo nhà cung cấp, nên cùng một sản phẩm có thể có mã HS khác nhau cho mỗi nhà cung cấp.`,choices:["True","False"],answer:1,why:`The HS code classifies the goods themselves, not the supplier. Store it on the product. A wrong code can mean the wrong duty and problems with customs.
VI: Mã HS phân loại chính hàng hóa, không phải nhà cung cấp. Hãy lưu nó trên sản phẩm. Sai mã có thể dẫn đến sai thuế và vướng mắc với hải quan.`}]},{id:"logistics.addresses",title:"Addresses and locations · Địa chỉ và vị trí",summary:`Messy text, structured fields, and place names that change.
VI: Địa chỉ gõ lộn xộn, trường có cấu trúc, và tên địa danh thay đổi.`,minutes:10,level:"expert",blocks:[{type:"text",text:`In this lesson, you learn to store addresses that still work later.
VI: Trong bài này, bạn học cách lưu địa chỉ vẫn đúng sau này.`},{type:"text",text:`Customers type addresses in many ways. "123 Lê Lợi, Q1, HCM" and "123 le loi quan 1 tphcm" are the same place. A system that only stores free text cannot route, price or report well.
VI: Khách gõ địa chỉ theo nhiều kiểu. "123 Lê Lợi, Q1, HCM" và "123 le loi quan 1 tphcm" là cùng một nơi. Hệ thống chỉ lưu chữ tự do thì khó lập tuyến, tính cước hay làm báo cáo.`},{type:"visual",svg:`<svg viewBox="0 0 360 190"><defs><marker id="lgG1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-box" x="10" y="14" width="110" height="34" rx="8"/><text class="v-title" x="65" y="36" text-anchor="middle">Old ward A</text>
<rect class="v-box" x="10" y="64" width="110" height="34" rx="8"/><text class="v-title" x="65" y="86" text-anchor="middle">Old ward B</text>
<line class="v-line" x1="120" y1="31" x2="226" y2="52" marker-end="url(#lgG1)"/>
<line class="v-line" x1="120" y1="81" x2="226" y2="62" marker-end="url(#lgG1)"/>
<text class="v-muted v-small" x="172" y="94" text-anchor="middle">merged in 2025</text>
<rect class="v-accent" x="228" y="38" width="122" height="34" rx="8"/><text class="v-title" x="289" y="60" text-anchor="middle">New ward AB</text>
<rect class="v-good" x="10" y="118" width="340" height="58" rx="8"/><text class="v-title" x="180" y="140" text-anchor="middle">2024 order keeps its copy</text><text class="v-small" x="180" y="160" text-anchor="middle">Text as typed + old code A</text></svg>`,alt:"Two old wards, A and B, merge into one new ward AB in 2025. Below, an order from 2024 keeps its own copy. That copy has the address text and old code A. It still reads correctly.",caption:`The map changes. An old order must keep what it was.
VI: Bản đồ thay đổi. Đơn cũ phải giữ nguyên những gì đã ghi.`},{type:"list",items:[`Green Farm sold 5,000 orders in 2024. Customers typed the address; the shop saved the text plus a ward code.
VI: Green Farm bán 5.000 đơn năm 2024. Khách gõ địa chỉ; shop lưu chữ kèm mã phường.`,`In 2025 some wards merged. 1,200 of the 5,000 orders point to old ward codes: 1,200 ÷ 5,000 = 24%.
VI: Năm 2025 một số phường sáp nhập. 1.200 trong 5.000 đơn trỏ tới mã phường cũ: 1.200 ÷ 5.000 = 24%.`,"The `AdminUnits` table keeps the old rows with `ValidTo` and `ReplacedBy`.\nVI: Bảng `AdminUnits` giữ các dòng cũ với `ValidTo` và `ReplacedBy`.","The sales report follows `ReplacedBy` to group old orders under the new ward.\nVI: Báo cáo doanh số đi theo `ReplacedBy` để gom đơn cũ vào phường mới."]},{type:"visual",svg:`<svg viewBox="0 0 360 190"><defs><marker id="lgG2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<text class="v-muted v-small" x="10" y="16">5,000 orders from 2024</text>
<rect class="v-bad" x="10" y="26" width="82" height="40" rx="6"/><text class="v-title" x="51" y="44" text-anchor="middle">1,200</text><text class="v-small" x="51" y="58" text-anchor="middle">old 24%</text>
<rect class="v-box" x="92" y="26" width="258" height="40" rx="6"/><text class="v-title" x="221" y="44" text-anchor="middle">3,800</text><text class="v-small" x="221" y="58" text-anchor="middle">current 76%</text>
<line class="v-line" x1="51" y1="68" x2="51" y2="106" marker-end="url(#lgG2)"/>
<rect class="v-accent" x="10" y="108" width="140" height="40" rx="8"/><text class="v-title" x="80" y="125" text-anchor="middle">New ward AB</text><text class="v-small" x="80" y="140" text-anchor="middle">report groups them</text>
<rect class="v-good" x="170" y="108" width="180" height="40" rx="8"/><text class="v-title" x="260" y="125" text-anchor="middle">Stays as it is</text><text class="v-small" x="260" y="140" text-anchor="middle">current codes, no change</text>
<text class="v-bad-text v-small" x="10" y="176">Without ReplacedBy: 0 shown</text></svg>`,alt:"A bar of 5,000 orders split in two. 1,200 orders, or 24 percent, use old ward codes. An arrow leads from them to the new ward AB. The other 3,800 orders keep their current codes.",caption:`The 1,200 old orders must follow ReplacedBy, or the ward report loses them.
VI: 1.200 đơn cũ phải đi theo ReplacedBy, nếu không báo cáo phường sẽ mất chúng.`},{type:"example",title:"Green Farm’s report",text:`Before the fix, the ward report showed 0 orders for the old wards. The 1,200 old orders were missing from the new ward total: 3,800 shown, not 5,000.
VI: Trước khi sửa, báo cáo theo phường hiện 0 đơn cho các phường cũ. 1.200 đơn cũ không nằm trong tổng của phường mới: hiện 3.800, không phải 5.000.
After the fix, ward AB shows 3,800 + 1,200 = 5,000 orders.
VI: Sau khi sửa, phường AB hiện 3.800 + 1.200 = 5.000 đơn.`},{type:"exercise",title:`Find the missing orders
VI: Tìm số đơn bị thiếu`,task:`The shop had 5,000 orders in the report period. The ward report shows 3,800 orders for ward AB and 0 for the old wards. How many orders are missing, and what share of all orders is that?
VI: Shop có 5.000 đơn trong kỳ báo cáo. Báo cáo phường hiện 3.800 đơn cho phường AB và 0 cho các phường cũ. Có bao nhiêu đơn bị thiếu, và chiếm tỷ lệ bao nhiêu trong tổng số đơn?`,hint:`Subtract the shown total from the real total. Then divide by the real total.
VI: Lấy tổng thật trừ đi tổng đang hiện. Sau đó chia cho tổng thật.`,solution:`Missing orders: 5,000 − 3,800 = 1,200. Share: 1,200 ÷ 5,000 = 0.24, so 24%. Fix: follow ReplacedBy, so the 1,200 old-code orders count under ward AB.
VI: Số đơn thiếu: 5.000 − 3.800 = 1.200. Tỷ lệ: 1.200 ÷ 5.000 = 0,24, tức 24%. Cách sửa: đi theo ReplacedBy, để 1.200 đơn mã cũ được tính vào phường AB.`},{type:"text",text:`Common mistake: run an UPDATE that overwrites old ward codes with new ones. The map looks clean today. But old delivery notes and invoices now show a ward that did not exist then.
VI: Lỗi hay gặp: chạy UPDATE ghi đè mã phường cũ bằng mã mới. Hôm nay dữ liệu nhìn gọn. Nhưng phiếu giao và hóa đơn cũ sẽ hiện một phường chưa tồn tại lúc đó.`},{type:"diagram",text:`Text as typed (keep it):
"12 ngõ 5 Láng Hạ, Đống Đa, HN"
          │ parse + customer confirms
          ▼
┌───────────┬──────────────────────┐
│ Line1     │ 12 ngõ 5 Láng Hạ     │
│ WardCode  │ (ward / commune)     │
│ Province  │ Hà Nội               │
│ Lat, Lng  │ 21.0…, 105.8…        │
│ Phone     │ 09xx xxx xxx         │
└───────────┴──────────────────────┘`},{type:"text",text:`**Geocoding** turns address text into map coordinates (latitude and longitude). Route planning needs them. Geocoding can be wrong. So let the customer drop a pin on the map. Let the driver correct it.
VI: **Geocoding** là chuyển địa chỉ dạng chữ thành tọa độ trên bản đồ (vĩ độ, kinh độ). Lập tuyến cần tọa độ này. Geocoding có thể sai, nên cho khách ghim vị trí trên bản đồ và cho tài xế sửa lại.`},{type:"text",text:`Administrative units change. In 2025 Vietnam reduced the number of provinces from 63 to 34. Many wards and communes were merged. The local government structure was also simplified. So do not hard-code the list. Use the official list for exact names and codes.
VI: Đơn vị hành chính có thể thay đổi. Năm 2025, Việt Nam giảm số tỉnh từ 63 xuống 34, và nhiều phường, xã được sáp nhập. Cơ cấu chính quyền địa phương cũng được tinh gọn. Vì vậy đừng ghi cứng danh sách này trong code. Hãy dùng danh sách chính thức để lấy đúng tên và mã.`},{type:"diagram",text:`Before mid-2025       From mid-2025
Province (63)         Province (34)
 └ District            (structure changed)
    └ Ward/Commune      └ Ward/Commune
       └ Street            └ Street`},{type:"code",code:{lang:"sql",text:`CREATE TABLE AdminUnits (
  Code       VARCHAR(10) PRIMARY KEY,
  Name       NVARCHAR(100) NOT NULL,
  Level      VARCHAR(10) NOT NULL,
  ParentCode VARCHAR(10) NULL,
  ValidFrom  DATE NOT NULL,
  ValidTo    DATE NULL,    -- NULL = in use
  ReplacedBy VARCHAR(10) NULL -- after merge
);
-- On the order: a copy, not only a link
-- ShipToText NVARCHAR(500)  as typed
-- ShipToWardCode, ShipToProvinceCode
-- ShipToLat, ShipToLng`}},{type:"text",text:`In 2026 a customer asks for a copy of a 2024 delivery note. If the system rebuilds the address from today’s ward table, the copy can be wrong. It may show a ward name that did not exist in 2024. Keep the address text that was on the order.
VI: Năm 2026, khách xin bản sao phiếu giao hàng năm 2024. Nếu hệ thống dựng lại địa chỉ từ bảng phường xã hiện tại, bản sao sẽ hiện tên phường chưa hề có vào năm 2024. Hãy giữ nguyên địa chỉ đã ghi trên đơn.`},{type:"text",text:`Ask the business: which address format do our carriers accept now? How do we report sales by region across the change? Do old documents need the old address?
VI: Cần hỏi nghiệp vụ: các hãng vận chuyển hiện nhận địa chỉ theo định dạng nào? Báo cáo doanh số theo vùng trước và sau thay đổi thế nào? Chứng từ cũ có cần giữ địa chỉ cũ không?`}],remember:`Keep the address as it was on the order, plus structured codes. Load place names from data, never from code.
VI: Giữ địa chỉ đúng như trên đơn, kèm các mã có cấu trúc. Lấy danh sách địa danh từ dữ liệu, không ghi cứng trong code.`,questions:[{id:"logistics.addresses.1",kind:"scenario",difficulty:"medium",prompt:`The checkout has a province dropdown built from a hard-coded enum of 63 provinces. After the 2025 change, what is the best fix?
VI: Trang thanh toán có danh sách tỉnh lấy từ một enum ghi cứng 63 tỉnh. Sau thay đổi năm 2025, cách sửa tốt nhất là gì?`,choices:[`Edit the enum to 34 provinces and deploy again
VI: Sửa enum thành 34 tỉnh rồi deploy lại`,`Load units from a table with valid-from and valid-to dates
VI: Lấy danh sách từ bảng có ngày hiệu lực từ và đến`,`Remove the dropdown and accept only free text
VI: Bỏ danh sách chọn, chỉ cho gõ chữ tự do`,`Keep 63 provinces and let carriers sort it out
VI: Giữ 63 tỉnh và để hãng vận chuyển tự xử lý`],answer:1,why:`A new enum works only until the next change. It also loses the old units that old orders still use. A table with validity dates handles both, without a deploy.
VI: Enum mới chỉ dùng được đến lần thay đổi sau, và mất các đơn vị cũ mà đơn hàng cũ vẫn dùng. Bảng có ngày hiệu lực xử lý được cả hai, không cần deploy.`},{id:"logistics.addresses.2",kind:"debug",difficulty:"medium",prompt:"A reprinted 2024 invoice shows a ward name that only exists since 2025. The order table stores only `WardCode`. What is the cause?\nVI: Hóa đơn năm 2024 in lại hiện tên phường chỉ có từ năm 2025. Bảng đơn hàng chỉ lưu `WardCode`. Nguyên nhân là gì?",choices:[`The printer template uses the wrong font for Vietnamese
VI: Mẫu in dùng sai font tiếng Việt`,`The name is looked up from today’s data, not stored
VI: Tên được tra từ dữ liệu hiện tại, không được lưu lại`,`The ward code was typed wrong by the customer
VI: Khách gõ sai mã phường`],answer:1,why:`With only a code, the name always comes from the current master data. Store the address text on the order too, as it was at that time.
VI: Chỉ lưu mã thì tên luôn lấy từ danh mục hiện tại. Hãy lưu thêm địa chỉ dạng chữ trên đơn, đúng như lúc đặt hàng.`},{id:"logistics.addresses.3",kind:"truefalse",difficulty:"easy",prompt:`If an address is valid, geocoding always returns the exact location of the door.
VI: Nếu địa chỉ hợp lệ, geocoding luôn trả về đúng vị trí cửa nhà.`,choices:["True","False"],answer:1,why:`Geocoding often returns only the street or the ward center, especially for alleys. Let the customer pin the spot and let drivers correct it.
VI: Geocoding thường chỉ trả về con đường hoặc trung tâm phường, nhất là với địa chỉ trong hẻm, ngõ. Hãy cho khách ghim vị trí và cho tài xế sửa lại.`},{id:"logistics.addresses.4",kind:"compare",difficulty:"medium",prompt:`How should an order store the delivery address?
VI: Đơn hàng nên lưu địa chỉ giao hàng thế nào?`,choices:[`One free-text field only
VI: Chỉ một trường chữ tự do`,`Only codes that link to the admin units table
VI: Chỉ các mã liên kết tới bảng đơn vị hành chính`,`The text as typed plus structured codes and lat/lng
VI: Chữ như khách gõ, kèm mã có cấu trúc và tọa độ`],answer:2,why:`Free text alone is hard to route and report. Codes alone change meaning when units merge. Keeping both gives history and structure.
VI: Chỉ có chữ thì khó lập tuyến và báo cáo. Chỉ có mã thì ý nghĩa thay đổi khi sáp nhập. Lưu cả hai thì vừa giữ lịch sử vừa có cấu trúc.`}]}],assessment:[{id:"logistics.assess.1",kind:"scenario",difficulty:"medium",prompt:`An order has 4 boxes. Three are delivered. Box 4 failed 3 times and is back at the shop. What should the order status show?
VI: Một đơn có 4 kiện. Ba kiện đã giao. Kiện 4 giao thất bại 3 lần và đã về lại shop. Trạng thái đơn nên hiện gì?`,choices:[`Closed: 3 delivered, 1 returned
VI: Đã đóng: 3 kiện đã giao, 1 kiện đã hoàn`,`Open: keep waiting for box 4
VI: Đang mở: tiếp tục chờ kiện 4`,`Delivered: all boxes have left the warehouse
VI: Đã giao: mọi kiện đã rời kho`,`Cancelled: delete the order and refund
VI: Đã hủy: xóa đơn và hoàn tiền`],answer:0,why:`Under the shop’s rule of 3 attempts, box 4 is returned. The order closes when every box has a final status. So 3 are delivered and 1 is returned.
VI: Theo quy tắc 3 lần giao của shop, kiện 4 được hoàn. Đơn đóng khi mọi kiện có trạng thái cuối. Vậy 3 kiện đã giao và 1 kiện đã hoàn.`},{id:"logistics.assess.2",kind:"scenario",difficulty:"medium",prompt:`A box is 50 × 40 × 20 cm and weighs 3 kg. The carrier divisor is 5,000 and the rate is 6,000 VND per kg. What is the chargeable weight and the fee?
VI: Một thùng 50 × 40 × 20 cm, nặng 3 kg. Hệ số chia của hãng là 5.000 và giá là 6.000 đồng mỗi kg. Khối lượng tính cước và phí là bao nhiêu?`,choices:[`3 kg and 18,000 VND
VI: 3 kg và 18.000 đồng`,`8 kg and 48,000 VND
VI: 8 kg và 48.000 đồng`,`8 kg and 24,000 VND
VI: 8 kg và 24.000 đồng`,`11 kg and 66,000 VND
VI: 11 kg và 66.000 đồng`],answer:1,why:`The volume is 50 × 40 × 20 = 40,000 cm³. Divided by 5,000 gives 8 kg, which is bigger than 3 kg. The fee is 8 × 6,000 = 48,000 VND.
VI: Thể tích là 50 × 40 × 20 = 40.000 cm³. Chia 5.000 được 8 kg, lớn hơn 3 kg. Phí là 8 × 6.000 = 48.000 đồng.`},{id:"logistics.assess.3",kind:"scenario",difficulty:"hard",prompt:`Event A: OUT_FOR_DELIVERY, happened 08:00, arrived 12:00. Event B: DELIVERED, happened 10:00, arrived 10:05. Event C: OUT_FOR_DELIVERY, happened 09:00, arrived 12:30. Which status should show?
VI: Sự kiện A: OUT_FOR_DELIVERY, xảy ra lúc 08:00, đến lúc 12:00. Sự kiện B: DELIVERED, xảy ra lúc 10:00, đến lúc 10:05. Sự kiện C: OUT_FOR_DELIVERY, xảy ra lúc 09:00, đến lúc 12:30. Trạng thái nào nên hiện?`,choices:[`OUT_FOR_DELIVERY, the last one received
VI: OUT_FOR_DELIVERY, sự kiện nhận sau cùng`,`DELIVERED, the latest OccurredAt
VI: DELIVERED, OccurredAt mới nhất`,`OUT_FOR_DELIVERY, the status with most events
VI: OUT_FOR_DELIVERY, trạng thái có nhiều sự kiện nhất`,`Unknown, because the times conflict
VI: Không rõ, vì thời gian mâu thuẫn`],answer:1,why:`Sort by OccurredAt: 08:00 out for delivery, 09:00 out for delivery, 10:00 delivered. The latest event is DELIVERED. The arrival order is not the rule.
VI: Sắp theo OccurredAt: 08:00 đang giao, 09:00 đang giao, 10:00 đã giao. Sự kiện mới nhất là DELIVERED. Thứ tự đến không phải là căn cứ.`},{id:"logistics.assess.4",kind:"debug",difficulty:"medium",prompt:`After a carrier changed its codes, customer pages show raw codes like "DLV-X". What is the most likely cause?
VI: Sau khi hãng đổi mã, trang khách hiện mã thô như "DLV-X". Nguyên nhân khả năng cao nhất là gì?`,choices:[`The database is too slow to update statuses
VI: Cơ sở dữ liệu quá chậm để cập nhật trạng thái`,`The new code is missing from the status mapping table
VI: Mã mới chưa có trong bảng ánh xạ trạng thái`,`The browser caches the order page
VI: Trình duyệt lưu cache trang đơn hàng`,`The carrier stopped sending webhooks
VI: Hãng đã ngừng gửi webhook`],answer:1,why:`A raw code shows when no mapping exists. The handler should store the event and alert the team. Then add the new code to the table.
VI: Mã thô hiện ra khi chưa có ánh xạ. Phần xử lý nên lưu sự kiện và báo cho team. Sau đó thêm mã mới vào bảng.`},{id:"logistics.assess.5",kind:"compare",difficulty:"medium",prompt:`Which parcel is more at risk of a quote gap? Parcel 1: a bulky box, 60 × 50 × 40 cm, 1.5 kg. Parcel 2: a small box, 20 × 15 × 10 cm, 3 kg. Use divisor 5,000.
VI: Kiện nào dễ bị lệch giá báo so với hóa đơn hơn? Kiện 1: thùng lớn 60 × 50 × 40 cm, nặng 1,5 kg. Kiện 2: thùng nhỏ 20 × 15 × 10 cm, nặng 3 kg. Dùng hệ số chia 5.000.`,choices:[`The bulky box: chargeable weight is 24 kg
VI: Thùng lớn: khối lượng tính cước là 24 kg`,`The small box: 3 kg is heavier than 1.5 kg
VI: Thùng nhỏ: 3 kg nặng hơn 1,5 kg`,`Both: the weights are close
VI: Cả hai: cân nặng gần nhau`],answer:0,why:`The bulky box has a volume of 120,000 cm³. 120,000 ÷ 5,000 = 24 kg. It weighs only 1.5 kg, so the gap is large. The small box is billed at its real 3 kg.
VI: Thùng lớn có thể tích 120.000 cm³. 120.000 ÷ 5.000 = 24 kg, trong khi nặng 1,5 kg nên chênh lệch lớn. Thùng nhỏ tính đúng 3 kg thật.`},{id:"logistics.assess.6",kind:"scenario",difficulty:"easy",prompt:`Your sales report counts a COD parcel as cash received. This happens on the day the driver delivers it. What is the main risk?
VI: Báo cáo bán hàng của bạn tính kiện COD là tiền đã thu vào ngày tài xế giao. Rủi ro chính là gì?`,choices:[`The cash is not in the shop bank yet, so the report overstates cash
VI: Tiền chưa vào tài khoản shop, nên báo cáo thổi phồng tiền mặt`,`There is no risk, because the driver hands over the cash the same day
VI: Không có rủi ro, vì tài xế nộp tiền ngay trong ngày`,`The report hides COD sales from the sales team
VI: Báo cáo giấu doanh số COD khỏi đội bán hàng`],answer:0,why:`COD money stays with the driver and the carrier until the transfer. Track "collected" and "paid out" as two separate steps.
VI: Tiền COD nằm ở tài xế và hãng cho đến khi hãng chuyển. Hãy theo dõi "đã thu" và "đã chuyển trả" là hai bước riêng.`},{id:"logistics.assess.7",kind:"scenario",difficulty:"easy",prompt:`Your truck leaves at 18:00. Picking and packing take 150 minutes. A 30-minute buffer is needed for the wave check. What is the latest cut-off time?
VI: Xe rời kho lúc 18:00. Lấy hàng và đóng gói mất 150 phút. Cần thêm 30 phút dự phòng để kiểm tra đợt. Giờ chốt đơn muộn nhất là mấy giờ?`,choices:["15:00","16:00","12:00","17:00"],answer:0,why:`150 + 30 = 180 minutes, which is 3 hours. 18:00 minus 3 hours is 15:00. A later cut-off would miss the truck.
VI: 150 + 30 = 180 phút, tức 3 giờ. 18:00 trừ 3 giờ là 15:00. Giờ chốt muộn hơn sẽ lỡ xe.`},{id:"logistics.assess.8",kind:"scenario",difficulty:"hard",prompt:`A buyer collects goods at the supplier’s factory under EXW. Who pays the export steps?
VI: Người mua đến lấy hàng tại nhà máy người bán theo điều kiện EXW. Ai trả các thủ tục xuất khẩu?`,choices:[`The seller, since the goods are still at its factory
VI: Người bán, vì hàng vẫn ở nhà máy của họ`,`The buyer, since under EXW the buyer pays the export steps
VI: Người mua, vì theo EXW người mua trả các thủ tục xuất khẩu`,`Split equally, since both sides use the factory
VI: Chia đều, vì cả hai bên cùng dùng nhà máy`,`Nobody pays, because the goods leave the factory
VI: Không ai trả, vì hàng rời khỏi nhà máy`],answer:1,why:`Under EXW the seller only makes the goods ready at its premises. The buyer pays loading, freight, export and import steps. Check the contract for details.
VI: Với EXW, người bán chỉ để hàng sẵn sàng tại cơ sở của mình. Người mua trả chi phí bốc xếp, cước, thủ tục xuất và nhập khẩu. Hãy kiểm tra hợp đồng để biết chi tiết.`},{id:"logistics.assess.9",kind:"scenario",difficulty:"medium",prompt:`A ward merged in 2025. Your report shows 0 orders for the old ward, but 2024 orders exist. What is the best fix?
VI: Một phường được sáp nhập năm 2025. Báo cáo của bạn hiện 0 đơn cho phường cũ, nhưng có đơn năm 2024. Cách sửa tốt nhất là gì?`,choices:[`Overwrite the old ward codes with the new code
VI: Ghi đè mã phường cũ bằng mã mới`,`Follow ReplacedBy and keep the old codes
VI: Đi theo ReplacedBy, giữ nguyên mã cũ`,`Delete the old ward from the table
VI: Xóa phường cũ khỏi bảng`,`Hide orders before 2025 from the report
VI: Ẩn đơn trước năm 2025 khỏi báo cáo`],answer:1,why:`ReplacedBy links an old unit to the new unit. The report can group old orders under the new ward. Old codes stay, so old documents still read correctly.
VI: ReplacedBy nối đơn vị cũ với đơn vị mới. Báo cáo gom đơn cũ vào phường mới. Mã cũ vẫn giữ nguyên, nên chứng từ cũ vẫn đúng.`},{id:"logistics.assess.10",kind:"scenario",difficulty:"hard",prompt:`Your buyer says the HS code changed when the supplier changed. What is the right action?
VI: Người mua nói mã HS đổi khi nhà cung cấp đổi. Hành động đúng là gì?`,choices:[`Check the product class, then store one HS code on it
VI: Kiểm tra nhóm hàng, rồi lưu một mã HS trên sản phẩm`,`Use the supplier code for every product
VI: Dùng mã của nhà cung cấp cho mọi sản phẩm`,`Use the cheapest supplier’s code
VI: Dùng mã của nhà cung cấp rẻ nhất`,`Skip the code, because duty may be the same
VI: Bỏ qua mã, vì thuế có thể giống nhau`],answer:0,why:`The HS code describes the goods, not the supplier. Check the classification with the current customs rules. Then store the code on the product.
VI: Mã HS mô tả hàng hóa, không phải nhà cung cấp. Hãy kiểm tra phân loại theo quy định hải quan hiện hành. Sau đó lưu mã trên sản phẩm.`}],cheatSheet:[{title:"Shipment and status",items:[{term:"Shipment · Kiện hàng giao",meaning:`The real box that moves; one order can have several.
VI: Thùng hàng thật sự di chuyển; một đơn có thể có nhiều kiện.`},{term:"Tracking number · Mã vận đơn",meaning:`The carrier’s id for one parcel.
VI: Mã của hãng để theo dõi một kiện hàng.`},{term:"Delivery failed · Giao thất bại",meaning:`The attempt did not work; retry or return.
VI: Lần giao không thành; giao lại hoặc chuyển hoàn.`},{term:"Return to sender · Chuyển hoàn",meaning:`The carrier brings an undelivered parcel back.
VI: Hãng mang kiện không giao được về lại cho shop.`},{term:"Final status · Trạng thái cuối",meaning:`A status that does not change again, like DELIVERED or RETURNED.
VI: Trạng thái không đổi nữa, như DELIVERED hoặc RETURNED.`},{term:"POD · Bằng chứng giao hàng",meaning:`Photo, signature or OTP that shows delivery.
VI: Ảnh, chữ ký hoặc mã OTP chứng minh đã giao.`},{term:"COD · Thu hộ",meaning:`The driver collects cash; the carrier pays the shop later.
VI: Tài xế thu tiền mặt; hãng chuyển trả cho shop sau.`}]},{title:"Cost",items:[{term:"Volumetric weight · Trọng lượng quy đổi",meaning:`L × W × H / divisor; the divisor is set by the carrier.
VI: Dài × rộng × cao / hệ số chia; hệ số do hãng quy định.`},{term:"Chargeable weight · Khối lượng tính cước",meaning:`The bigger of actual and volumetric weight.
VI: Số lớn hơn giữa cân thật và trọng lượng quy đổi.`},{term:"Zone · Vùng",meaning:`Distance group used in the rate table.
VI: Nhóm khoảng cách dùng trong bảng giá cước.`},{term:"Surcharge · Phụ phí",meaning:`An extra fee on top of the base price, for example fuel or COD.
VI: Khoản cộng thêm vào giá gốc, ví dụ phí nhiên liệu hoặc phí COD.`},{term:"3PL · Logistics bên thứ ba",meaning:`An outside company that stores, packs and ships for you.
VI: Công ty ngoài lưu kho, đóng gói và giao hàng giúp bạn.`},{term:"COD reconciliation · Đối soát COD",meaning:`Match each parcel’s COD with the carrier statement.
VI: Khớp tiền COD từng kiện với bảng kê của hãng.`}]},{title:"Events and data",items:[{term:"Webhook",meaning:`The carrier calls your URL when something happens.
VI: Hãng gọi vào URL của bạn khi có sự kiện.`},{term:"Polling",meaning:`You call the carrier API every few minutes.
VI: Bạn gọi API của hãng vài phút một lần.`},{term:"Idempotent",meaning:`Handling the same event twice changes nothing more.
VI: Xử lý cùng một sự kiện hai lần không thay đổi thêm gì.`},{term:"OccurredAt · Thời điểm xảy ra",meaning:`Decide the status by when it happened, not when it arrived.
VI: Chọn trạng thái theo lúc xảy ra, không theo lúc nhận.`},{term:"Status mapping · Ánh xạ trạng thái",meaning:`Carrier codes map to your own statuses, kept in a table.
VI: Mã của hãng ánh xạ sang trạng thái của mình, lưu trong bảng.`},{term:"Address snapshot · Địa chỉ lưu trên đơn",meaning:`Keep the address text as it was on the order.
VI: Giữ nguyên địa chỉ dạng chữ như lúc đặt hàng.`}]},{title:"Trade and warehouse",items:[{term:"EXW",meaning:`Buyer takes the goods at the seller’s door and all the risk from there.
VI: Người mua nhận hàng tại cơ sở người bán và chịu mọi rủi ro từ đó.`},{term:"FOB",meaning:`Seller pays until the goods are on board; buyer pays the sea freight.
VI: Người bán chịu đến khi hàng lên tàu; người mua trả cước biển.`},{term:"CIF",meaning:`Seller pays freight and insurance; risk moves when on board.
VI: Người bán trả cước và bảo hiểm; rủi ro chuyển khi hàng lên tàu.`},{term:"DDP",meaning:`Seller pays everything, including import duty, to the buyer’s door.
VI: Người bán chịu mọi chi phí, kể cả thuế nhập khẩu, đến tận nơi người mua.`},{term:"HS code · Mã HS",meaning:`International goods code; it helps decide the duty rate.
VI: Mã phân loại hàng hóa quốc tế; giúp quyết định thuế suất.`},{term:"Landed cost · Giá vốn nhập kho",meaning:`Price plus freight, insurance, duty and local costs.
VI: Giá hàng cộng cước, bảo hiểm, thuế và chi phí nội địa.`},{term:"Cross-docking",meaning:`Inbound truck to outbound truck, with little storage.
VI: Từ xe nhập sang xe xuất, gần như không lưu kho.`},{term:"Cut-off time · Giờ chốt đơn",meaning:`Orders before this time ship the same day.
VI: Đơn trước giờ này được giao cho hãng trong ngày.`},{term:"Wave picking · Lấy hàng theo đợt",meaning:`Release groups of orders at set times, for example per pickup.
VI: Thả từng nhóm đơn vào giờ định sẵn, ví dụ theo giờ hãng lấy hàng.`},{term:"Lead time · Thời gian chờ hàng",meaning:`Total time from order to goods ready to sell.
VI: Tổng thời gian từ lúc đặt đến lúc hàng sẵn sàng bán.`}]}]},l=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"})),g={id:"warehouse",group:"domain",title:"Warehouse Management for Developers",emoji:"🏬",tagline:`Where each item sits, and how staff move it.
VI: Mỗi hàng nằm ở đâu, và nhân viên di chuyển nó thế nào.`,lessons:[{id:"warehouse.stock-location",title:"Stock and location · Tồn kho và vị trí",summary:`Inventory says how much. A WMS says where and how.
VI: Tồn kho cho biết bao nhiêu. WMS cho biết ở đâu và xử lý thế nào.`,minutes:5,level:"basic",blocks:[{type:"text",text:`In this lesson you learn where each item sits in a warehouse.
VI: Trong bài này bạn học mỗi hàng nằm ở đâu trong kho.`},{type:"text",text:`An **inventory** system knows how much stock exists for each item. A **warehouse management system (WMS)** knows where each unit sits. It also guides each move. Both are needed. One counts. The other finds the box.
VI: **Hệ thống tồn kho** biết mỗi mặt hàng có bao nhiêu. **Hệ thống quản lý kho (WMS)** biết từng đơn vị nằm ở đâu và hướng dẫn mỗi lần di chuyển. Cả hai đều cần. Một bên đếm, bên kia tìm đúng thùng hàng.`},{type:"text",text:`Mekong Foods stores rice in its warehouse. The **ERP** (the main business system) says: rice 5 kg, 500 bags in stock. That is the how much. The WMS says: bags sit in aisle A, rack 3, bin A-03-02-B. That is the where.
VI: Mekong Foods lưu gạo trong kho. **ERP** (hệ thống quản lý doanh nghiệp chính) cho biết: gạo 5 kg, còn 500 bao. Đó là bao nhiêu. WMS cho biết: bao nằm ở dãy A, kệ 3, ô A-03-02-B. Đó là ở đâu.`},{type:"visual",svg:`<svg viewBox="0 0 360 236">
<rect class="v-soft" x="10" y="8" width="340" height="32" rx="8"/><text class="v-title" x="22" y="29">Site: HCM warehouse</text>
<rect class="v-box" x="28" y="54" width="322" height="32" rx="8"/><text class="v-title" x="40" y="75">Zone: dry goods</text>
<rect class="v-box" x="46" y="100" width="304" height="32" rx="8"/><text class="v-title" x="58" y="121">Aisle A</text>
<rect class="v-box" x="64" y="146" width="286" height="32" rx="8"/><text class="v-title" x="76" y="167">Rack A-03</text>
<rect class="v-good v-pulse" x="82" y="192" width="268" height="32" rx="8"/><text class="v-title" x="94" y="213">Bin A-03-02-B: rice 200 bags</text></svg>`,alt:"Five nested boxes from the whole site down to one bin. Each level sits inside the one above: site, zone, aisle, rack, bin.",caption:`Stock is counted per item. The WMS tracks each place it sits.
VI: Tồn kho đếm theo mặt hàng. WMS theo dõi từng nơi hàng nằm.`},{type:"visual",svg:`<svg viewBox="0 0 360 180"><defs><marker id="wh1a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-box" x="8" y="24" width="160" height="120" rx="8"/><text class="v-title" x="88" y="46" text-anchor="middle">ERP inventory</text>
<text class="v-small" x="88" y="70" text-anchor="middle">Rice 5 kg: 500 bags</text>
<text class="v-small" x="88" y="92" text-anchor="middle">Answers: how much?</text>
<line class="v-flow" x1="168" y1="84" x2="192" y2="84" marker-end="url(#wh1a)"/>
<rect class="v-soft" x="192" y="24" width="160" height="120" rx="8"/><text class="v-title" x="272" y="46" text-anchor="middle">WMS locations</text>
<text class="v-small" x="272" y="70" text-anchor="middle">A-03-02-B: 200 bags</text>
<text class="v-small" x="272" y="90" text-anchor="middle">A-03-03-A: 200 bags</text>
<text class="v-small" x="272" y="110" text-anchor="middle">A-03-04-A: 100 bags</text>
<text class="v-small" x="272" y="130" text-anchor="middle">Answers: where it sits</text>
<text class="v-small v-muted" x="180" y="168" text-anchor="middle">Both totals must match</text></svg>`,alt:"ERP shows 500 bags of rice in total. The WMS splits the same 500 bags across three bins. An arrow links the two totals.",caption:`The ERP total must equal the sum of all WMS bins.
VI: Tổng trong ERP phải bằng tổng của mọi ô trong WMS.`},{type:"list",items:[`Site: one warehouse building.
VI: Site: một tòa nhà kho.`,`Zone: a group of areas, such as dry or chilled.
VI: Zone: nhóm các khu, ví dụ khô hoặc mát.`,`Aisle and rack: rows of shelves.
VI: Dãy và kệ: các hàng kệ.`,`Bin: the smallest storage place, with its own code.
VI: Bin (ô): vị trí lưu trữ nhỏ nhất, có mã riêng.`]},{type:"text",text:`Keep the **location** as a code, not as free text. "Top shelf near the door" cannot be scanned or sorted. A code like A-03-02-B can.
VI: Hãy lưu **vị trí** dưới dạng mã, không dùng chữ tự do. "Kệ trên cùng gần cửa" không quét được và không sắp xếp được. Mã như A-03-02-B thì làm được.`},{type:"example",title:"Rice in three bins",text:`Mekong Foods has 500 bags of rice. The WMS puts 200 in bin A-03-02-B, 200 in A-03-03-A and 100 in A-03-04-A. The ERP shows 500. Both systems agree on the total. Only the WMS knows where each bag sits.
VI: Mekong Foods có 500 bao gạo. WMS đặt 200 bao ở ô A-03-02-B, 200 bao ở ô A-03-03-A và 100 bao ở ô A-03-04-A. ERP hiển thị 500. Hai hệ thống khớp nhau về tổng. Chỉ WMS biết từng bao nằm ở đâu.`},{type:"code",code:{lang:"csharp",text:`public class Bin
{
    // Location code, for example A-03-02-B.
    public string Code { get; set; } = "";
    // Most bags this bin can hold.
    public int Capacity { get; set; }
    public int OnHand { get; set; }
}`}},{type:"text",text:`**Common mistake:** using the ERP stock number to pick goods. The ERP does not know the bin. Pickers then search the whole aisle. Always pick from the bin shown by the WMS.
VI: **Lỗi hay gặp:** dùng số tồn trong ERP để lấy hàng. ERP không biết ô hàng. Người lấy hàng phải tìm khắp dãy. Luôn lấy hàng theo ô mà WMS chỉ ra.`},{type:"exercise",title:`Find the missing bags
VI: Tìm số bao còn thiếu`,task:`The ERP says 500 bags of rice. The WMS bins hold 200, 200 and 90 bags. Add the WMS bins. How many bags are missing from the WMS?
VI: ERP ghi 500 bao gạo. Các ô WMS chứa 200, 200 và 90 bao. Hãy cộng số trong các ô WMS. Có bao nhiêu bao gạo còn thiếu trong WMS?`,hint:`Add the three bins first. Then subtract the total from 500.
VI: Hãy cộng ba ô trước. Sau đó lấy 500 trừ đi tổng đó.`,solution:`200 + 200 + 90 = 490. Then 500 - 490 = 10. So 10 bags are missing from the WMS. Check the put-away record for those 10 bags.
VI: 200 + 200 + 90 = 490. Rồi 500 - 490 = 10. Vậy 10 bao còn thiếu trong WMS. Hãy kiểm tra phiếu cất hàng cho 10 bao đó.`}],remember:`Inventory counts the stock. The WMS tracks where it sits.
VI: Tồn kho đếm hàng. WMS theo dõi hàng nằm ở đâu.`,questions:[{id:"warehouse.stock-location.1",kind:"mcq",difficulty:"easy",prompt:`Which system answers the question "Where is bin A-03-02-B?"
VI: Hệ thống nào trả lời câu hỏi "Ô A-03-02-B nằm ở đâu?"`,choices:["The ERP inventory report","The WMS location list","The sales invoice list","The purchase order history"],answer:1,why:`Inventory tells how much. The WMS location list has each bin code and what sits in it.
VI: Tồn kho cho biết bao nhiêu. Danh sách vị trí WMS có mã từng ô và hàng nằm trong ô đó.`},{id:"warehouse.stock-location.2",kind:"truefalse",difficulty:"easy",prompt:`If the ERP shows 500 bags of rice, must one WMS bin hold all 500?
VI: Nếu ERP hiện 500 bao gạo, WMS phải có một ô duy nhất chứa 500 bao.`,choices:["True","False"],answer:1,why:`The 500 bags can sit in several bins. The total must match, not the number of bins.
VI: 500 bao có thể nằm ở nhiều ô. Tổng phải khớp, còn số lượng ô thì không cần.`},{id:"warehouse.stock-location.3",kind:"scenario",difficulty:"medium",prompt:`A picker walks to aisle A for rice. The ERP says 500 bags. The rack is empty. What is the most likely gap?
VI: Người lấy hàng đến dãy A tìm gạo. ERP ghi 500 bao. Kệ thì trống. Khả năng cao nhất là lỗi gì?`,choices:["The rice sits in a bin the WMS does not list","The ERP total is wrong by design","The picker must ask the sales team","The rice was sold, so ERP is correct"],answer:0,why:`The stock exists in the ERP, but the WMS has no bin for it. Check the put-away record.
VI: Hàng có trong ERP, nhưng WMS không có ô cho nó. Hãy kiểm tra phiếu cất hàng.`},{id:"warehouse.stock-location.4",kind:"compare",difficulty:"hard",prompt:`A warehouse grows to 2,000 items. Which storage plan grows well?
VI: Kho tăng lên 2.000 mặt hàng. Cách lưu trữ nào mở rộng tốt?`,choices:["One shelf per item, found by memory","Bin codes with capacity, stored in the WMS","Free text such as near the door","Bins with no capacity limit"],answer:1,why:`Bin codes can be scanned, sorted and capped. Memory and free text do not scale.
VI: Mã ô có thể quét, sắp xếp và giới hạn số lượng. Trí nhớ và chữ tự do không mở rộng được.`}]},{id:"warehouse.receiving",title:"Receiving: check what arrives · Nhận hàng: kiểm tra hàng về",summary:`Count, check and record the goods before they go on the shelf.
VI: Đếm, kiểm tra và ghi nhận hàng trước khi đưa lên kệ.`,minutes:5,level:"basic",blocks:[{type:"text",text:`In this lesson you learn how to check a truck before its goods go into stock.
VI: Trong bài này bạn học cách kiểm tra xe hàng trước khi hàng được đưa vào tồn kho.`},{type:"text",text:`**Receiving** is the first warehouse step. The truck arrives at the dock. Staff check the goods against the **purchase order (PO)**. The PO is the order Mekong sent to the supplier. Only good goods become stock you can sell.
VI: **Nhận hàng (receiving)** là bước kho đầu tiên. Xe giao hàng đến bến nhận. Nhân viên đối chiếu hàng với **đơn mua hàng (PO)**, tức đơn Mekong đã gửi cho nhà cung cấp. Chỉ hàng đạt mới trở thành tồn kho bán được.`},{type:"text",text:`Example: the PO asks for 600 bags of rice. The truck brings 600 bags. Staff check the bags and find 20 torn. So 580 are good. The receipt records 600 received, 580 accepted and 20 damaged.
VI: Ví dụ: đơn mua 600 bao gạo. Xe mang về 600 bao. Nhân viên kiểm tra và thấy 20 bao bị rách. Vậy 580 bao đạt. Phiếu nhận ghi: nhận 600, chấp nhận 580, hư hỏng 20.`},{type:"visual",svg:`<svg viewBox="0 0 360 224"><defs><marker id="wh2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-box" x="10" y="8" width="340" height="28" rx="6"/><text class="v-title" x="22" y="27">1. Truck arrives at dock</text>
<line class="v-flow" x1="180" y1="36" x2="180" y2="52" marker-end="url(#wh2a)"/>
<rect class="v-box" x="10" y="52" width="340" height="28" rx="6"/><text class="v-title" x="22" y="71">2. Match against the PO</text>
<line class="v-flow" x1="180" y1="80" x2="180" y2="96" marker-end="url(#wh2a)"/>
<rect class="v-warn v-pulse" x="10" y="96" width="340" height="28" rx="6"/><text class="v-title" x="22" y="115">3. Count and check quality</text>
<line class="v-flow" x1="180" y1="124" x2="180" y2="140" marker-end="url(#wh2a)"/>
<rect class="v-good" x="10" y="140" width="340" height="28" rx="6"/><text class="v-title" x="22" y="159">4. Record accepted, damaged</text>
<line class="v-flow" x1="180" y1="168" x2="180" y2="184" marker-end="url(#wh2a)"/>
<rect class="v-soft" x="10" y="184" width="340" height="28" rx="6"/><text class="v-title" x="22" y="203">5. Move to put-away area</text></svg>`,alt:"Five steps from top to bottom. The truck arrives, goods are matched to the PO, counted, recorded and moved.",caption:`Only accepted goods can be sold. Step 4 records that number.
VI: Chỉ hàng đạt mới bán được. Bước 4 ghi nhận số này.`},{type:"visual",svg:`<svg viewBox="0 0 360 180">
<text class="v-small" x="10" y="24">Ordered (PO): 600</text>
<rect class="v-box" x="10" y="30" width="300" height="16" rx="4"/>
<text class="v-small" x="10" y="64">Received: 600</text>
<rect class="v-soft" x="10" y="70" width="300" height="16" rx="4"/>
<text class="v-small" x="10" y="104">Accepted: 580</text>
<rect class="v-good" x="10" y="110" width="290" height="16" rx="4"/>
<text class="v-small" x="10" y="144">Damaged: 20</text>
<rect class="v-bad" x="300" y="150" width="10" height="16" rx="4"/></svg>`,alt:"Bars for one receipt. Ordered and received are both 600. Accepted is 580. The damaged 20 is the short red end.",caption:`Accepted and damaged add up to what was received.
VI: Số đạt và số hư cộng lại bằng số đã nhận.`},{type:"list",items:[`Received: the quantity that came on the truck.
VI: Đã nhận: số lượng có trên xe.`,`Accepted: the quantity that passed the check.
VI: Chấp nhận: số lượng qua được kiểm tra.`,`Damaged: the quantity to return to the supplier.
VI: Hư hỏng: số lượng trả lại nhà cung cấp.`,`Lot number and expiry date: needed for food and medicine.
VI: Số lô và hạn dùng: cần cho thực phẩm và thuốc.`]},{type:"text",text:`Record the **lot number** (số lô) and the **expiry date** at receiving. Later steps need them. A lot is a batch of goods made together. The last lesson covers lots in more detail.
VI: Ghi **số lô (lot)** và **hạn dùng** ngay khi nhận. Các bước sau cần đến chúng. Lô là một nhóm hàng được làm cùng lúc. Bài cuối sẽ nói kỹ hơn về lô.`},{type:"code",code:{lang:"ts",text:`function accepted(got: number, bad: number) {
  if (bad > got) {
    throw new Error('Bad count');
  }
  return got - bad;
}

accepted(600, 20); // 580`}},{type:"example",title:"Canned fish from a supplier",text:`The PO asks for 400 cans of fish. The truck brings 400 cans, but 15 cans have dented lids. The team records 385 accepted and 15 damaged. The 385 cans go to put-away. The 15 cans wait for a return.
VI: Đơn mua 400 hộp cá. Xe giao 400 hộp, nhưng 15 hộp bị móp nắp. Nhóm ghi nhận 385 hộp đạt và 15 hộp hư. 385 hộp được đưa đi cất. 15 hộp chờ trả nhà cung cấp.`},{type:"text",text:`**Common mistake:** adding the whole truck to stock, then fixing it later. Damaged goods then look sellable for days. Record accepted and damaged numbers at the dock, on the same day.
VI: **Lỗi hay gặp:** nhập cả xe vào tồn kho rồi sửa sau. Khi đó hàng hỏng trông như còn bán được trong nhiều ngày. Hãy ghi số đạt và số hỏng ngay tại bến nhận, trong cùng một ngày.`},{type:"exercise",title:`Fill in the receipt
VI: Ghi phiếu nhận hàng`,task:`The PO asks for 500 bags of flour. The truck brings 500 bags. The check finds 12 bags torn. Fill in: received, damaged and accepted.
VI: Đơn mua hỏi 500 bao bột mì. Xe mang về 500 bao. Kiểm tra thấy 12 bao bị rách. Hãy ghi: đã nhận, hư hỏng và chấp nhận.`,hint:`Accepted is received minus damaged.
VI: Chấp nhận bằng đã nhận trừ đi hư hỏng.`,solution:`Received: 500. Damaged: 12. Accepted: 500 - 12 = 488.
VI: Đã nhận: 500. Hư hỏng: 12. Chấp nhận: 500 - 12 = 488.`}],remember:`Count what arrived, then count what is good. Record both.
VI: Đếm hàng đã về, rồi đếm hàng đạt. Ghi cả hai.`,questions:[{id:"warehouse.receiving.1",kind:"mcq",difficulty:"easy",prompt:`What is the purchase order (PO) used for at receiving?
VI: Đơn mua hàng (PO) được dùng để làm gì khi nhận hàng?`,choices:["To compare goods with what was ordered","To set the price for the customer","To pay the truck driver","To print labels for buyers"],answer:0,why:`The PO is the reference. Staff compare the truck with it line by line.
VI: PO là chuẩn để đối chiếu. Nhân viên so xe hàng với PO theo từng dòng.`},{id:"warehouse.receiving.2",kind:"truefalse",difficulty:"easy",prompt:`Damaged goods should be counted as stock you can sell.
VI: Hàng hư hỏng nên được tính là tồn kho bán được.`,choices:["True","False"],answer:1,why:`Only accepted goods can be sold. Damaged goods wait for a return or a removal from stock.
VI: Chỉ hàng đạt mới bán được. Hàng hư chờ trả lại hoặc được xóa khỏi tồn kho.`},{id:"warehouse.receiving.3",kind:"debug",difficulty:"medium",prompt:`The receipt shows 600 received and 20 damaged. The system adds all 600 to sellable stock. Later a customer gets a torn bag. What is the most likely cause?
VI: Phiếu nhận ghi 600 nhận và 20 hư. Hệ thống cộng cả 600 vào tồn bán được. Sau đó khách nhận được một bao rách. Nguyên nhân khả năng cao nhất là gì?`,choices:["Damaged quantity was not taken out of stock","The purchase order was too large","The supplier sent bags in the wrong colour","The customer ordered from the wrong shop"],answer:0,why:`Damaged units must stay out of sellable stock. The system should add only accepted units.
VI: Hàng hư phải nằm ngoài tồn bán được. Hệ thống chỉ nên cộng số hàng đạt.`},{id:"warehouse.receiving.4",kind:"scenario",difficulty:"hard",prompt:`The warehouse receives 300 trucks a month. Receipts are typed in later, after the truck leaves. Stock is wrong by lunch. What change helps most?
VI: Kho nhận 300 xe mỗi tháng. Phiếu nhận được nhập sau khi xe đi. Đến trưa tồn kho đã sai. Thay đổi nào giúp nhiều nhất?`,choices:["Scan at the dock and post each line","Hire more drivers for the trucks","Print the PO twice for each receipt","Count the stock once a year only"],answer:0,why:`Scanning reads each barcode at the dock. Posting at once gives the real count right away.
VI: Quét đọc mã vạch ngay tại bến. Ghi sổ ngay cho ra số đếm thật tức thì.`}]},{id:"warehouse.putaway",title:"Put-away: choose the bin · Cất hàng: chọn ô",summary:`Rules that pick the right bin for each received pallet or carton.
VI: Quy tắc chọn đúng ô cho mỗi pallet hoặc thùng hàng nhận về.`,minutes:6,level:"practical",blocks:[{type:"text",text:`In this lesson you learn how to choose a bin for each batch of goods that arrives.
VI: Trong bài này bạn học cách chọn ô cho mỗi đợt hàng nhận về.`},{type:"text",text:`**Put-away** means moving received goods into a storage bin. The WMS picks the bin using rules. Common rules: same product together, dry goods in dry zones, and enough free space.
VI: **Cất hàng (put-away)** là đưa hàng đã nhận vào ô lưu trữ. WMS chọn ô theo quy tắc. Quy tắc thường gặp: cùng mặt hàng để chung, hàng khô vào khu khô và đủ chỗ trống.`},{type:"text",text:`Example: 580 bags of rice arrive. Each bin holds at most 200 bags. Each product has a **SKU** (stock keeping unit, a product code). The WMS splits the load across three bins: 200, 200 and 180 bags.
VI: Ví dụ: 580 bao gạo về. Mỗi ô chứa tối đa 200 bao. Mỗi sản phẩm có một **SKU** (mã quản lý hàng tồn, là mã sản phẩm). WMS chia số hàng: 200 bao vào A-03-02-B, 200 bao vào A-03-03-A và 180 bao vào A-03-04-A.`},{type:"visual",svg:`<svg viewBox="0 0 360 190"><defs><marker id="wh3a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-soft" x="110" y="8" width="140" height="32" rx="8"/><text class="v-title" x="180" y="29" text-anchor="middle">Dock: 580 bags received</text>
<line class="v-flow" x1="180" y1="40" x2="61" y2="110" marker-end="url(#wh3a)"/>
<line class="v-flow" x1="180" y1="40" x2="180" y2="110" marker-end="url(#wh3a)"/>
<line class="v-flow" x1="180" y1="40" x2="299" y2="110" marker-end="url(#wh3a)"/>
<rect class="v-good" x="8" y="110" width="106" height="44" rx="8"/><text class="v-title" x="61" y="128" text-anchor="middle">A-03-02-B</text><text class="v-small" x="61" y="146" text-anchor="middle">200 bags</text>
<rect class="v-good" x="127" y="110" width="106" height="44" rx="8"/><text class="v-title" x="180" y="128" text-anchor="middle">A-03-03-A</text><text class="v-small" x="180" y="146" text-anchor="middle">200 bags</text>
<rect class="v-warn" x="246" y="110" width="106" height="44" rx="8"/><text class="v-title" x="299" y="128" text-anchor="middle">A-03-04-A</text><text class="v-small" x="299" y="146" text-anchor="middle">180 bags</text>
<text class="v-small v-muted" x="180" y="182" text-anchor="middle">Each bin: max 200 bags</text></svg>`,alt:"One dock receipt of 580 bags flows into three bins. Two bins take 200 bags each, and the third takes 180 bags.",caption:`One receipt can fill several bins. Each bin has a limit.
VI: Một lần nhận có thể lấp đầy nhiều ô. Mỗi ô có giới hạn.`},{type:"list",items:[`Same product: keep it together when you can.
VI: Cùng mặt hàng: để chung nếu có thể.`,`Zone: dry, chilled or frozen, by product type.
VI: Khu: khô, mát hoặc đông lạnh, theo loại hàng.`,`Capacity: the most units one bin can hold.
VI: Sức chứa: số lượng nhiều nhất một ô chứa được.`,`Order: FIFO (first in, first out) or FEFO (first to expire, first out).
VI: Thứ tự xuất: FIFO (nhập trước, xuất trước) hoặc FEFO (hết hạn trước, xuất trước).`]},{type:"visual",svg:`<svg viewBox="0 0 360 190">
<text class="v-small" x="10" y="20">A-03-02-B: 200 of 200</text>
<rect class="v-box" x="10" y="26" width="300" height="18" rx="4"/><rect class="v-good" x="10" y="26" width="300" height="18" rx="4"/>
<text class="v-small" x="10" y="72">A-03-03-A: 200 of 200</text>
<rect class="v-box" x="10" y="78" width="300" height="18" rx="4"/><rect class="v-good" x="10" y="78" width="300" height="18" rx="4"/>
<text class="v-small" x="10" y="124">A-03-04-A: 180 of 200</text>
<rect class="v-box" x="10" y="130" width="300" height="18" rx="4"/><rect class="v-warn" x="10" y="130" width="270" height="18" rx="4"/>
<text class="v-small v-muted" x="10" y="176">Limit is 200 bags per bin</text></svg>`,alt:"Three bin gauges. The first two bins are full at 200 of 200 bags. The third holds 180 of 200 bags, so it has room left.",caption:`A full bin cannot take more. The WMS must check this before a move.
VI: Ô đã đầy không nhận thêm được. WMS phải kiểm tra điều này trước khi di chuyển.`},{type:"text",text:`Put-away sets where stock sits. A wrong bin is hard to find later. So the WMS should check the bin before it saves the move.
VI: Cất hàng quyết định hàng nằm ở đâu. Đặt sai ô sẽ khó tìm sau này. Vì vậy WMS nên kiểm tra ô trước khi lưu lệnh di chuyển.`},{type:"code",code:{lang:"csharp",text:`// Simple rule: first bin, by code, with room.
public Bin? ChooseBin(IEnumerable<Bin> bins,
    string sku, int qty)
{
    return bins
        .Where(b => b.Sku == sku || b.Sku == null)
        .Where(b => b.Capacity - b.OnHand >= qty)
        .OrderBy(b => b.Code)
        .FirstOrDefault();
}`}},{type:"example",title:"Frozen fish",text:`200 packs of frozen fish arrive, all from one lot. The frozen zone has a bin with 120 packs already. Free space is 80 packs. The WMS puts 80 packs there. The rest goes to the next free bin.
VI: 200 gói cá đông lạnh về, cùng một lô. Khu đông lạnh có một ô đã chứa 120 gói. Còn trống 80 gói. WMS đưa 80 gói vào ô đó, phần còn lại vào ô trống tiếp theo trong khu.`},{type:"text",text:`**Common mistake:** putting goods in the first empty bin without checking the limit. Then one bin holds 350 bags and the count is wrong. Check capacity before every move.
VI: **Lỗi hay gặp:** để hàng vào ô trống đầu tiên mà không kiểm tra giới hạn. Khi đó một ô chứa 350 bao và số đếm sai. Hãy kiểm tra sức chứa trước mỗi lần di chuyển.`},{type:"exercise",title:`Split a receipt across two bins
VI: Chia một phiếu nhận vào hai ô`,task:`Bin A-03-02-B holds 140 of its 200 bags. Bin A-03-03-A is empty. Each bin holds up to 200 bags. The dock receives 150 bags of rice. Use this rule: fill the first bin with room, by code. How many bags go to each bin?
VI: Ô A-03-02-B đang chứa 140 trên 200 bao. Ô A-03-03-A trống. Mỗi ô chứa tối đa 200 bao. Bến nhận 150 bao gạo. Dùng quy tắc này: đổ đầy ô đầu tiên còn chỗ, theo mã. Mỗi ô nhận bao nhiêu bao?`,hint:`Find the free space in A-03-02-B first.
VI: Hãy tìm chỗ trống của A-03-02-B trước.`,solution:`A-03-02-B has 200 - 140 = 60 free, so 60 bags go there. The other 150 - 60 = 90 bags go to A-03-03-A. Check: 60 + 90 = 150.
VI: A-03-02-B còn trống 200 - 140 = 60, nên 60 bao vào đó. Số còn lại 150 - 60 = 90 bao vào A-03-03-A. Kiểm tra: 60 + 90 = 150.`}],remember:`Put-away follows rules. A bin must have room and the right zone.
VI: Cất hàng theo quy tắc. Ô phải còn chỗ và đúng khu.`,questions:[{id:"warehouse.putaway.1",kind:"mcq",difficulty:"easy",prompt:`What is the main job of put-away?
VI: Việc chính của cất hàng là gì?`,choices:["To place received goods in the right bin","To count the goods for the invoice","To sell the goods to the customer","To send the goods back to the supplier"],answer:0,why:`Put-away moves received stock to its storage place. Counting and selling happen in other steps.
VI: Cất hàng đưa hàng đã nhận vào chỗ lưu trữ. Đếm và bán là các bước khác.`},{id:"warehouse.putaway.2",kind:"truefalse",difficulty:"easy",prompt:`Put-away should check the bin capacity before it saves the move.
VI: Cất hàng nên kiểm tra sức chứa của ô trước khi lưu lệnh di chuyển.`,choices:["True","False"],answer:0,why:`If the check runs after the save, the bin is already over the limit.
VI: Nếu kiểm tra sau khi lưu, ô đã vượt giới hạn rồi.`},{id:"warehouse.putaway.3",kind:"code",difficulty:"medium",prompt:`What does this print? ChooseBin returns the first bin that has enough free space.
VI: Đoạn này in ra gì? ChooseBin trả về ô đầu tiên còn đủ chỗ trống.`,code:{lang:"csharp",text:`var bin = new Bin {
    Code = "A-03-02-B", Capacity = 200,
    OnHand = 120, Sku = "FISH" };
var chosen = ChooseBin(new[] { bin }, "FISH", 100);
Console.WriteLine(chosen?.Code ?? "none");`},choices:["A-03-02-B","none","An exception is thrown","FISH"],answer:1,why:`The bin has only 80 free, and 100 does not fit. So the result is null, and the code prints "none".
VI: Ô chỉ còn trống 80, không đủ 100. Kết quả là null, nên code in ra "none".`},{id:"warehouse.putaway.4",kind:"debug",difficulty:"hard",prompt:`After a busy day, one bin shows 350 bags, but its limit is 200. Each move checked capacity first. Two users saved moves at the same moment. What is the most likely cause?
VI: Sau một ngày đông, một ô hiện 350 bao, nhưng giới hạn là 200. Mỗi lệnh đều kiểm tra sức chứa trước. Hai người lưu lệnh cùng lúc. Nguyên nhân khả năng cao nhất là gì?`,choices:["Two moves read the same free space at once","The bin limit was typed in kilograms, not bags","The zone for rice was closed by mistake","The picker scanned the wrong product code"],answer:0,why:`Both checks passed before either save finished. A database lock or a single atomic update stops this.
VI: Cả hai lần kiểm tra đều đạt trước khi bên nào lưu xong. Khóa trong cơ sở dữ liệu hoặc một lệnh cập nhật nguyên tử (atomic) sẽ chặn lỗi này.`}]},{id:"warehouse.picking",title:"Picking and packing · Lấy hàng và đóng gói",summary:`How pickers collect an order, and how packers box and check it.
VI: Cách người lấy hàng gom đơn, và cách người đóng gói đóng thùng và kiểm tra.`,minutes:6,level:"practical",blocks:[{type:"text",text:`In this lesson you learn how staff collect and pack one customer order.
VI: Trong bài này bạn học cách nhân viên lấy hàng và đóng gói một đơn khách.`},{type:"text",text:`**Picking** is taking items from bins to fill an order. **Packing** puts the picked items into a box, checks them and labels the box. The WMS makes a **pick list**. The list gives bin codes in walking order.
VI: **Lấy hàng (picking)** là lấy hàng từ các ô để đủ một đơn. **Đóng gói (packing)** là cho hàng đã lấy vào thùng, kiểm tra và dán nhãn. WMS tạo **phiếu lấy hàng (pick list)**. Phiếu ghi mã ô theo thứ tự đi bộ.`},{type:"text",text:`Example: Hoa Mart orders 30 bags of rice and 12 cartons of noodles. The rice sits in A-03-02-B and A-03-03-A. The noodles sit in B-01-04-A. The WMS sorts the list by walking route, so the picker passes each aisle once.
VI: Ví dụ: Hoa Mart đặt 30 bao gạo và 12 thùng mì. Gạo nằm ở A-03-02-B và A-03-03-A. Mì nằm ở B-01-04-A. WMS sắp phiếu theo đường đi, nên người lấy hàng chỉ đi qua mỗi dãy một lần.`},{type:"visual",svg:`<svg viewBox="0 0 360 200"><defs><marker id="wh4a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-box" x="10" y="8" width="340" height="32" rx="8"/><text class="v-title" x="22" y="29">1. A-03-02-B: 20 bags rice</text>
<line class="v-flow" x1="180" y1="40" x2="180" y2="56" marker-end="url(#wh4a)"/>
<rect class="v-box" x="10" y="56" width="340" height="32" rx="8"/><text class="v-title" x="22" y="77">2. A-03-03-A: 10 bags rice</text>
<line class="v-flow" x1="180" y1="88" x2="180" y2="104" marker-end="url(#wh4a)"/>
<rect class="v-box" x="10" y="104" width="340" height="32" rx="8"/><text class="v-title" x="22" y="125">3. B-01-04-A: 12 cartons</text>
<line class="v-flow" x1="180" y1="136" x2="180" y2="152" marker-end="url(#wh4a)"/>
<rect class="v-good v-pulse" x="10" y="152" width="340" height="32" rx="8"/><text class="v-title" x="22" y="173">4. Pack: check and label</text></svg>`,alt:"A pick list in walking order. Three bins are visited, then the order goes to packing.",caption:`Pickers follow the list in walking order, from bin to pack station.
VI: Người lấy hàng đi theo phiếu, từ ô đến trạm đóng gói.`},{type:"visual",svg:`<svg viewBox="0 0 360 190">
<rect class="v-box" x="8" y="16" width="160" height="130" rx="8"/><text class="v-title" x="88" y="40" text-anchor="middle">Single order</text>
<text class="v-small" x="88" y="66" text-anchor="middle">1 order = 1 trip</text>
<text class="v-small" x="88" y="88" text-anchor="middle">Easy to check</text>
<text class="v-small" x="88" y="110" text-anchor="middle">Slow for small orders</text>
<rect class="v-good" x="192" y="16" width="160" height="130" rx="8"/><text class="v-title" x="272" y="40" text-anchor="middle">Batch pick</text>
<text class="v-small" x="272" y="66" text-anchor="middle">3 orders = 1 trip</text>
<text class="v-small" x="272" y="88" text-anchor="middle">Fewer walks</text>
<text class="v-small" x="272" y="110" text-anchor="middle">Needs a sort at pack</text>
<text class="v-small v-muted" x="180" y="170" text-anchor="middle">Batch for shared bins</text></svg>`,alt:"Two picking methods side by side. Single order picking is one trip per order. Batch picking covers three orders in one trip but needs a sort step at packing.",caption:`Batch picking saves walks. It needs a sort step at packing.
VI: Gom lô giảm số lần đi lại. Khi đóng gói phải có bước phân loại.`},{type:"list",items:[`Single order: one list, one trip. Simple to check.
VI: Một đơn: một phiếu, một lần đi. Dễ kiểm tra.`,`Batch: several orders, one trip. Sort them at packing.
VI: Gom lô: nhiều đơn, một lần đi. Phân loại khi đóng gói.`,`Zone: each picker works one area only.
VI: Theo khu: mỗi người chỉ làm một khu.`,`Wave: release picks in timed groups.
VI: Theo đợt: phát phiếu lấy hàng theo từng nhóm có giờ.`]},{type:"text",text:`Pick by bin code, and check the product code too. Two similar names can sit side by side. Both checks stop the wrong item from leaving the warehouse.
VI: Lấy hàng theo mã ô, và kiểm tra thêm mã hàng. Hai tên gần giống có thể nằm cạnh nhau. Cả hai bước kiểm tra giúp hàng sai không rời kho.`},{type:"code",code:{lang:"ts",text:`type Line = {
  bin: string;
  sku: string;
  qty: number;
};

// Sort by bin code, so the walk follows the aisles.
const pickList = (lines: Line[]) =>
  [...lines].sort((a, b) =>
    a.bin.localeCompare(b.bin));

pickList([
  { bin: 'B-01-04-A', sku: 'MI', qty: 12 },
  { bin: 'A-03-02-B', sku: 'RICE', qty: 20 },
]);`}},{type:"example",title:"A short pick",text:`Hoa Mart orders 30 bags. Bin A-03-02-B should hold 20 bags. The picker finds only 15 and records 15. The system raises a **short pick** alert. The missing 5 bags are taken from another bin with stock.
VI: Hoa Mart đặt 30 bao. Ô A-03-02-B phải có 20 bao. Người lấy hàng chỉ thấy 15 bao và ghi 15. Hệ thống báo **thiếu khi lấy hàng (short pick)**. 5 bao còn thiếu được lấy từ một ô khác có hàng.`},{type:"text",text:`**Common mistake:** packing before the picked items are checked. A wrong item then ships in the box. Scan each item at packing, against the order.
VI: **Lỗi hay gặp:** đóng gói trước khi kiểm tra hàng đã lấy. Khi đó hàng sai vẫn nằm trong thùng. Hãy quét từng món khi đóng gói và đối chiếu với đơn.`},{type:"exercise",title:`Put the bins in walking order
VI: Xếp các ô theo đường đi`,task:`Put these bins in walking order: B-01-04-A, A-03-03-A, A-03-02-B. Write the order from first to last.
VI: Hãy xếp các ô sau theo thứ tự đi bộ: B-01-04-A, A-03-03-A, A-03-02-B. Viết thứ tự từ đầu đến cuối.`,hint:`Sort by the code text. Compare the first letter, then the numbers.
VI: Sắp theo mã. So chữ cái đầu trước, rồi đến các số.`,solution:`A-03-02-B, then A-03-03-A, then B-01-04-A. The letter A comes before B. Among the A codes, 02 comes before 03.
VI: A-03-02-B, rồi A-03-03-A, rồi B-01-04-A. Chữ A đứng trước chữ B. Trong các mã A, 02 đứng trước 03.`}],remember:`Pick in walking order, then check each item before the box closes.
VI: Lấy hàng theo đường đi, rồi kiểm tra từng món trước khi đóng thùng.`,questions:[{id:"warehouse.picking.1",kind:"mcq",difficulty:"easy",prompt:`What is a pick list?
VI: Phiếu lấy hàng là gì?`,choices:["Bin codes and quantities to collect","A list of customers who pay late","A report of the day sales in money","A list of trucks waiting at the dock"],answer:0,why:`A pick list tells the picker where to go and how much to take.
VI: Phiếu lấy hàng cho người lấy biết phải đi đâu và lấy bao nhiêu.`},{id:"warehouse.picking.2",kind:"truefalse",difficulty:"easy",prompt:`Packers should check each item against the order before the box is closed.
VI: Người đóng gói nên đối chiếu từng món với đơn trước khi đóng thùng.`,choices:["True","False"],answer:0,why:`This catches wrong items before they leave the warehouse.
VI: Cách này bắt được hàng sai trước khi rời kho.`},{id:"warehouse.picking.3",kind:"compare",difficulty:"medium",prompt:`Which method suits 200 small orders that share the same bins?
VI: Cách nào phù hợp với 200 đơn nhỏ dùng chung các ô?`,choices:["One trip for each order, with no sorting","Batch picking, then sort the items at packing","Ask each picker to remember the bin codes","Pick from the nearest bin, not from the list"],answer:1,why:`Batch takes many orders in one walk. Sorting at packing then splits them again.
VI: Gom lô lấy nhiều đơn trong một lần đi. Sau đó phân loại khi đóng gói để tách lại từng đơn.`},{id:"warehouse.picking.4",kind:"perf",difficulty:"hard",prompt:`Pickers walk 5 km per shift. Pick lists are sorted by product name, not by bin. What should change first?
VI: Người lấy hàng đi bộ 5 km mỗi ca. Phiếu lấy hàng được sắp theo tên sản phẩm, không theo ô. Nên đổi điều gì trước?`,choices:["Sort the pick list by bin code route","Give pickers faster shoes","Print the pick list in colour","Add more pickers to each aisle"],answer:0,why:`Sorting by name sends the picker back and forth. Sorting by bin keeps the walk short.
VI: Sắp theo tên khiến người lấy hàng đi qua đi lại. Sắp theo mã ô giúp đường đi ngắn hơn.`}]},{id:"warehouse.replenishment",title:"Replenishment: refill the pick bins · Bổ sung ô lấy hàng",summary:`Move stock from big storage to small pick bins before they run out.
VI: Chuyển hàng từ kho dự trữ lớn sang ô lấy hàng nhỏ trước khi hết.`,minutes:5,level:"practical",blocks:[{type:"text",text:`In this lesson you learn when to refill a small pick bin from reserve stock.
VI: Trong bài này bạn học khi nào cần bổ sung một ô lấy hàng nhỏ từ khu dự trữ.`},{type:"text",text:`Warehouses often have two areas. A **reserve** area holds full pallets or cases. A **pick face** holds a smaller amount near the packing area. **Replenishment** moves stock from reserve to pick face, before the pick face runs out.
VI: Kho thường có hai khu. **Khu dự trữ (reserve)** giữ pallet hoặc thùng nguyên. **Khu lấy hàng (pick face)** giữ ít hơn, gần trạm đóng gói. **Bổ sung (replenishment)** chuyển hàng từ dự trữ sang khu lấy hàng trước khi khu này hết.`},{type:"text",text:`Each pick bin has a **minimum** and a **maximum**. The minimum is the trigger level. The maximum is the most the bin can hold. When stock falls below min, the WMS creates a move task up to max.
VI: Mỗi ô lấy hàng có **mức tối thiểu (min)** và **mức tối đa (max)**. Min là ngưỡng kích hoạt. Max là số lượng nhiều nhất ô chứa được. Khi tồn dưới min, WMS tạo lệnh chuyển hàng đến max.`},{type:"visual",svg:`<svg viewBox="0 0 360 220"><defs><marker id="wh5a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-box" x="8" y="60" width="130" height="60" rx="8"/><text class="v-title" x="73" y="88" text-anchor="middle">Reserve: 480 bags</text>
<line class="v-flow" x1="138" y1="90" x2="222" y2="90" marker-end="url(#wh5a)"/>
<text class="v-small" x="180" y="82" text-anchor="middle">move 155 bags</text>
<rect class="v-warn v-pulse" x="222" y="60" width="130" height="60" rx="8"/><text class="v-title" x="287" y="88" text-anchor="middle">Pick bin: 45</text>
<text class="v-small" x="287" y="106" text-anchor="middle">Below min 50</text>
<text class="v-small" x="8" y="164">Pick bin level (bags)</text>
<rect class="v-box" x="8" y="176" width="340" height="14" rx="3"/><rect class="v-warn" x="8" y="176" width="77" height="14" rx="3"/>
<line class="v-line" x1="93" y1="170" x2="93" y2="196"/>
<text class="v-small" x="93" y="208" text-anchor="middle">min 50</text>
<text class="v-small" x="348" y="208" text-anchor="end">max 200</text></svg>`,alt:"Reserve holds 480 bags and the pick bin holds 45, below its minimum of 50. A move of 155 bags fills the bin to its maximum of 200.",caption:`Stock moves from reserve to the pick bin before it runs out.
VI: Hàng được chuyển từ dự trữ sang ô lấy hàng trước khi hết.`},{type:"visual",svg:`<svg viewBox="0 0 360 196"><defs><marker id="wh5b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-soft" x="70" y="8" width="220" height="32" rx="8"/><text class="v-title" x="180" y="29" text-anchor="middle">Check each pick bin</text>
<line class="v-flow" x1="180" y1="40" x2="180" y2="60" marker-end="url(#wh5b)"/>
<rect class="v-box" x="70" y="60" width="220" height="32" rx="8"/><text class="v-title" x="180" y="81" text-anchor="middle">Stock below min?</text>
<line class="v-flow" x1="150" y1="92" x2="83" y2="116" marker-end="url(#wh5b)"/>
<text class="v-small" x="112" y="100" text-anchor="middle">no</text>
<line class="v-flow" x1="210" y1="92" x2="277" y2="116" marker-end="url(#wh5b)"/>
<text class="v-small" x="248" y="100" text-anchor="middle">yes</text>
<rect class="v-soft" x="8" y="116" width="150" height="40" rx="8"/><text class="v-title" x="83" y="140" text-anchor="middle">No: do nothing</text>
<rect class="v-good" x="202" y="116" width="150" height="40" rx="8"/><text class="v-title" x="277" y="140" text-anchor="middle">Yes: create a task</text>
<text class="v-small v-muted" x="180" y="182" text-anchor="middle">Task: move 155 from reserve</text></svg>`,alt:"Check each pick bin. If stock is below minimum, create a task to move stock from reserve. If not, do nothing.",caption:`The check runs after each pick. A task fills the bin up to max.
VI: Kiểm tra chạy sau mỗi lần lấy hàng. Lệnh chuyển đầy ô đến mức max.`},{type:"list",items:[`Min: the level that starts a move.
VI: Min: mức làm phát sinh lệnh chuyển.`,`Max: the most the bin can hold.
VI: Max: số lượng nhiều nhất ô chứa được.`,`Task: the move order from reserve to the pick bin.
VI: Lệnh: phiếu chuyển hàng từ dự trữ sang ô lấy hàng.`,`Trigger: when the check runs, such as after a pick.
VI: Điểm kích hoạt: lúc kiểm tra chạy, ví dụ sau khi lấy hàng.`]},{type:"text",text:`Check the **bin level**, not only the total stock. Total stock may be large while the pick bin is empty. The picker needs the bin, not the warehouse total.
VI: Hãy kiểm tra **mức tồn trong ô**, không chỉ tổng tồn. Tổng tồn có thể lớn trong khi ô lấy hàng trống. Người lấy hàng cần ô, không cần tổng kho.`},{type:"code",code:{lang:"ts",text:`type Bin = {
  code: string;
  onHand: number;
  min: number;
  max: number;
};

// Amount to move, or 0 when no task is needed.
function replenishTask(bin: Bin): number {
  if (bin.onHand >= bin.min) return 0;
  return bin.max - bin.onHand;
}

replenishTask({
  code: 'A-03-02-B', onHand: 45, min: 50, max: 200,
}); // 155`}},{type:"example",title:"Rice pick bin",text:`The rice pick bin has 45 bags. Min is 50 and max is 200. Reserve holds 480 bags. The task moves 155 bags. After the move, the bin has 200 and reserve has 325.
VI: Ô lấy hàng gạo còn 45 bao. Min là 50 và max là 200. Khu dự trữ có 480 bao. Lệnh chuyển 155 bao. Sau khi chuyển, ô có 200 bao và dự trữ còn 325 bao.`},{type:"text",text:`**Common mistake:** setting min to zero. Then the picker finds the bin empty during a rush. Set min to cover a few hours of picks, based on past sales.
VI: **Lỗi hay gặp:** đặt min bằng 0. Khi đó giờ cao điểm người lấy hàng gặp ô rỗng. Hãy đặt min đủ cho vài giờ lấy hàng, dựa trên doanh số cũ.`},{type:"exercise",title:`Check one pick bin
VI: Kiểm tra một ô lấy hàng`,task:`A pick bin has min 50 and max 200. It holds 30 bags now. Reserve holds 400 bags. Does the bin need a task? If yes, how many bags move, and how many are left in reserve?
VI: Một ô lấy hàng có min 50 và max 200. Hiện ô có 30 bao. Dự trữ có 400 bao. Ô có cần lệnh không? Nếu có, bao nhiêu bao được chuyển, và dự trữ còn lại bao nhiêu?`,hint:`A task is needed when the bin is below min. Move stock up to max.
VI: Cần lệnh khi ô dưới min. Chuyển hàng đến mức max.`,solution:`Yes, 30 is below min 50. Move 200 - 30 = 170 bags. Reserve left: 400 - 170 = 230 bags.
VI: Có, 30 dưới min 50. Chuyển 200 - 30 = 170 bao. Dự trữ còn lại: 400 - 170 = 230 bao.`}],remember:`Refill a pick bin before it runs out, using min and max.
VI: Bổ sung ô lấy hàng trước khi hết, dựa trên min và max.`,questions:[{id:"warehouse.replenishment.1",kind:"mcq",difficulty:"easy",prompt:`What does the minimum level of a pick bin mean?
VI: Mức tối thiểu của ô lấy hàng có nghĩa là gì?`,choices:["The level that starts a replenishment move","The most stock the warehouse can keep","The lowest price the customer can pay","The number of pickers per aisle"],answer:0,why:`When stock falls to the minimum or below, the system creates a move task.
VI: Khi tồn xuống bằng hoặc dưới mức min, hệ thống tạo lệnh chuyển hàng.`},{id:"warehouse.replenishment.2",kind:"truefalse",difficulty:"medium",prompt:`With 500 bags in total, a pick bin of 5 bags never needs a task.
VI: Nếu tổng tồn là 500 bao, một ô lấy hàng chỉ có 5 bao thì không bao giờ cần lệnh bổ sung.`,choices:["True","False"],answer:1,why:`The check uses the bin level. Total stock in reserve does not fill the pick bin by itself.
VI: Kiểm tra dùng mức tồn trong ô. Tổng tồn ở dự trữ không tự đổ vào ô lấy hàng.`},{id:"warehouse.replenishment.3",kind:"scenario",difficulty:"medium",prompt:`A rush hour starts. A pick bin has 40 bags and min is 50. The replenishment check only runs at the end of the shift. What is the main risk?
VI: Giờ cao điểm bắt đầu. Một ô có 40 bao, min là 50. Kiểm tra bổ sung chỉ chạy cuối ca. Rủi ro chính là gì?`,choices:["Pickers wait for stock during the rush","The total stock number becomes wrong","The reserve area fills up by itself","The price list changes during the shift"],answer:0,why:`The task should run when the level drops. Otherwise the bin runs empty at peak time.
VI: Lệnh phải chạy khi mức tồn giảm. Nếu không, ô sẽ hết đúng lúc đông nhất.`},{id:"warehouse.replenishment.4",kind:"perf",difficulty:"hard",prompt:`A replenishment check reads every bin in the warehouse each minute, for 80,000 bins. The system slows down. What is the better approach?
VI: Kiểm tra bổ sung đọc mọi ô trong kho mỗi phút, với 80.000 ô. Hệ thống chậm đi. Cách nào tốt hơn?`,choices:["Check only the bins that changed","Turn off the check during the day","Buy a faster printer for the dock","Count all bins once a year instead"],answer:0,why:`Most bins do not change each minute. Checking only changed bins cuts the work a lot.
VI: Hầu hết ô không đổi mỗi phút. Chỉ kiểm tra các ô đã đổi sẽ giảm nhiều việc.`}]},{id:"warehouse.cycle-count",title:"Cycle counting · Kiểm kê luân phiên",summary:`Count a small part of the stock often, not the whole warehouse once a year.
VI: Đếm một phần hàng thường xuyên, thay vì kiểm kê cả kho một lần mỗi năm.`,minutes:6,level:"expert",blocks:[{type:"text",text:`In this lesson you learn how to count stock often, and what to do with a gap.
VI: Trong bài này bạn học cách đếm hàng thường xuyên, và cách xử lý khi có chênh lệch.`},{type:"text",text:`A **physical count** compares what the system says with what is on the shelf. A **full stock take** counts everything, often once a year. A **cycle count** counts a small group of bins each day. Errors are found sooner.
VI: **Kiểm kê thực tế (physical count)** so sánh số trên hệ thống với số thật trên kệ. **Kiểm kê toàn bộ (full stock take)** đếm mọi thứ, thường mỗi năm một lần. **Kiểm kê luân phiên (cycle count)** đếm một nhóm nhỏ ô mỗi ngày. Lỗi được phát hiện sớm hơn.`},{type:"text",text:`Mekong Foods counts 40 bins a day. Over 10 working days, that is 400 bin counts. If the warehouse has 400 bins or fewer, each bin is counted once. Stock errors are fixed in days, not in a year.
VI: Mekong Foods đếm 40 ô mỗi ngày. Trong 10 ngày làm việc, đó là 400 lượt đếm ô. Nếu kho có 400 ô trở xuống, mỗi ô được đếm một lần. Lỗi tồn kho được sửa trong vài ngày, không phải cả năm.`},{type:"visual",svg:`<svg viewBox="0 0 360 160">
<text class="v-small v-muted" x="10" y="18">Example split of items</text>
<rect class="v-bad v-pulse" x="10" y="26" width="34" height="28" rx="4"/><text class="v-small" x="27" y="44" text-anchor="middle">A</text>
<rect class="v-warn" x="44" y="26" width="102" height="28" rx="4"/><text class="v-small" x="95" y="44" text-anchor="middle">B</text>
<rect class="v-soft" x="146" y="26" width="204" height="28" rx="4"/><text class="v-small" x="248" y="44" text-anchor="middle">C</text>
<text class="v-small" x="10" y="84">A: 10% items, counted weekly</text>
<text class="v-small" x="10" y="110">B: 30% items, monthly count</text>
<text class="v-small" x="10" y="136">C: 60% items, twice a year</text></svg>`,alt:"One bar split into three parts. A is 10 percent of items and counted weekly. B is 30 percent and counted monthly. C is 60 percent and counted twice a year.",caption:`Example split. Count the high-value items most often.
VI: Ví dụ về cách chia. Đếm các mặt hàng giá trị cao thường xuyên nhất.`},{type:"visual",svg:`<svg viewBox="0 0 360 250"><defs><marker id="wh6a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-box" x="8" y="16" width="160" height="40" rx="8"/><text class="v-title" x="88" y="41" text-anchor="middle">System: 200 bags</text>
<rect class="v-box" x="192" y="16" width="160" height="40" rx="8"/><text class="v-title" x="272" y="41" text-anchor="middle">Counted: 196 bags</text>
<line class="v-flow" x1="88" y1="56" x2="150" y2="86" marker-end="url(#wh6a)"/>
<line class="v-flow" x1="272" y1="56" x2="210" y2="86" marker-end="url(#wh6a)"/>
<rect class="v-bad" x="70" y="86" width="220" height="36" rx="8"/><text class="v-title" x="180" y="108" text-anchor="middle">Gap -4 bags: 2%, over 1%</text>
<line class="v-flow" x1="180" y1="122" x2="180" y2="142" marker-end="url(#wh6a)"/>
<rect class="v-warn v-pulse" x="70" y="142" width="220" height="36" rx="8"/><text class="v-title" x="180" y="164" text-anchor="middle">Recount the bin</text>
<line class="v-flow" x1="180" y1="178" x2="180" y2="198" marker-end="url(#wh6a)"/>
<rect class="v-good" x="70" y="198" width="220" height="36" rx="8"/><text class="v-title" x="180" y="220" text-anchor="middle">Approve, then adjust stock</text></svg>`,alt:"System says 200 bags and the count is 196. The 2 percent gap is over the 1 percent limit, so recount first.",caption:`A gap above the limit needs a recount before any adjustment.
VI: Chênh lệch vượt mức cho phép phải đếm lại trước khi điều chỉnh.`},{type:"list",items:[`Bin code: the place counted.
VI: Mã ô: nơi được đếm.`,`System count: what the WMS says.
VI: Số hệ thống: WMS ghi bao nhiêu.`,`Counted quantity: what the counter sees.
VI: Số đếm được: người đếm thấy bao nhiêu.`,`Reason code: why the gap happened, such as damage or wrong put-away.
VI: Mã lý do: vì sao lệch, ví dụ hư hỏng hoặc cất sai ô.`]},{type:"text",text:`The counter should **not see the system count** first. This is called a **blind count**. Otherwise the counter may copy the system number. A blind count gives an honest result.
VI: Người đếm **không nên thấy số hệ thống** trước. Đây gọi là **đếm mù (blind count)**. Nếu không, người đếm có thể chép lại số hệ thống. Đếm mù cho kết quả trung thực.`},{type:"code",code:{lang:"csharp",text:`public CountResult Check(Bin bin, int counted)
{
    int gap = counted - bin.OnHand;
    if (gap == 0) return CountResult.Match;
    // Allowed gap: 1% of the bin's stock.
    int allowed = bin.OnHand / 100;
    return Math.Abs(gap) > allowed
        ? CountResult.Recount
        : CountResult.Adjust;
}`}},{type:"example",title:"Bin A-03-02-B",text:`The system says 200 bags. The counter counts 196. The gap is 4, which is above the 1% limit of 2. A second counter counts 196 again. The adjustment of -4 is approved and saved with the reason "damaged in move".
VI: Hệ thống ghi 200 bao. Người đếm đếm được 196. Chênh lệch là 4, vượt mức 1% (tức 2 bao). Người thứ hai đếm lại vẫn là 196. Điều chỉnh -4 được duyệt và lưu với lý do "hỏng khi di chuyển".`},{type:"text",text:`**Common mistake:** adjusting the system to match the count at once. The gap may be a counting error. Recount first, then adjust, and record the reason.
VI: **Lỗi hay gặp:** sửa ngay hệ thống cho khớp số đếm. Chênh lệch có thể là lỗi đếm. Hãy đếm lại trước, rồi điều chỉnh và ghi lý do.`},{type:"exercise",title:`Decide on a gap
VI: Quyết định khi có chênh lệch`,task:`The system says 300 bags. The counter counts 294. The limit is 1% of the system count. Is the gap allowed? What is the next step?
VI: Hệ thống ghi 300 bao. Người đếm được 294. Mức cho phép là 1% số trên hệ thống. Chênh lệch có được phép không? Bước tiếp theo là gì?`,hint:`Find the gap first. Then find 1% of 300.
VI: Tìm chênh lệch trước. Sau đó tìm 1% của 300.`,solution:`Gap: 300 - 294 = 6 bags. Limit: 1% of 300 = 3 bags. 6 is more than 3, so the gap is not allowed. Recount the bin first.
VI: Chênh lệch: 300 - 294 = 6 bao. Mức cho phép: 1% của 300 = 3 bao. 6 lớn hơn 3, nên không được phép. Hãy đếm lại ô trước.`}],remember:`Count a little every day, and recount any gap before you adjust.
VI: Đếm một ít mỗi ngày, và đếm lại mọi chênh lệch trước khi điều chỉnh.`,questions:[{id:"warehouse.cycle-count.1",kind:"mcq",difficulty:"easy",prompt:`What is a cycle count?
VI: Kiểm kê luân phiên là gì?`,choices:["Counting a small group of bins on a regular schedule","Closing the warehouse once a year to count all","Counting only the bins that have sold out","Counting the trucks as they leave the dock"],answer:0,why:`A cycle count checks a small part of the stock on a regular plan. The whole warehouse is covered over time.
VI: Kiểm kê luân phiên đếm một phần nhỏ hàng theo lịch đều đặn. Theo thời gian, cả kho được đếm đủ.`},{id:"warehouse.cycle-count.2",kind:"truefalse",difficulty:"medium",prompt:`A blind count shows the system number to the counter, so the count is faster.
VI: Đếm mù cho người đếm thấy số hệ thống, nên việc đếm nhanh hơn.`,choices:["True","False"],answer:1,why:`Showing the number can make the counter copy it. The count is then not honest.
VI: Nếu hiện số hệ thống, người đếm có thể chép theo. Khi đó kết quả không trung thực.`},{id:"warehouse.cycle-count.3",kind:"scenario",difficulty:"hard",prompt:`A bin shows a gap of 3 bags out of 150, which is 2%. The tolerance is 1%. The manager wants to adjust right away to save time. What is the best next step?
VI: Một ô lệch 3 bao trên 150 bao, tức 2%. Mức cho phép là 1%. Quản lý muốn điều chỉnh ngay để tiết kiệm thời gian. Bước tiếp theo tốt nhất là gì?`,choices:["Recount the bin and check the moves first","Adjust the system now and skip the reason","Ignore the gap because it is small","Close the bin for a week without a count"],answer:0,why:`The gap is above the 1% limit, so a recount comes first. Then check recent moves for the cause.
VI: Chênh lệch vượt mức 1%, nên phải đếm lại trước. Sau đó kiểm tra các lần di chuyển gần đây để tìm nguyên nhân.`},{id:"warehouse.cycle-count.4",kind:"debug",difficulty:"hard",prompt:`Stock drifts every month in the same bins, even after adjustments. Recounts match the physical stock. What is the most likely cause?
VI: Tồn kho cứ lệch mỗi tháng ở cùng các ô, dù đã điều chỉnh. Đếm lại thì khớp với hàng thật. Nguyên nhân khả năng cao nhất là gì?`,choices:["Moves happen without a scan to post them","The count sheets are printed in the wrong colour","The ABC classes are too many to manage","The warehouse has too many aisles"],answer:0,why:`If a move is not scanned, the WMS never updates the bin. Scan every move.
VI: Nếu lệnh di chuyển không được quét, WMS không bao giờ cập nhật ô. Hãy quét mọi lần di chuyển.`}]},{id:"warehouse.lot-serial",title:"Lot and serial tracking · Theo dõi lô và số serial",summary:`Know which batch or unit each item is, for recalls and expiry.
VI: Biết mỗi hàng thuộc lô nào hoặc là chiếc nào, để thu hồi và theo hạn dùng.`,minutes:6,level:"expert",blocks:[{type:"text",text:`In this lesson you learn how to track a batch, or one unit, from receipt to shipment.
VI: Trong bài này bạn học cách theo dõi một lô, hoặc một máy, từ lúc nhận đến lúc xuất.`},{type:"text",text:`A **lot** (lô) is a batch of items made together. All items in a lot share a production date and an expiry date. A **serial number** (số serial) is a unique code for one unit. One laptop or one rice cooker has its own serial.
VI: **Lô (lot)** là một nhóm hàng được làm cùng lúc. Mọi hàng trong một lô có chung ngày sản xuất và hạn dùng. **Số serial (serial number)** là mã duy nhất của một đơn vị, ví dụ một máy tính xách tay hoặc một nồi cơm điện.`},{type:"text",text:`Mekong Foods receives canned fish in lot **L-2026-07A**. The lot has 300 cartons. Expiry is **2027-01-15**. If quality fails, the WMS lists every bin and shipment with that lot. Only those need a **recall**, which means taking the goods back.
VI: Mekong Foods nhận cá hộp thuộc lô **L-2026-07A**. Lô có 300 thùng. Hạn dùng là **15/01/2027**. Nếu phát hiện lỗi chất lượng, WMS liệt kê mọi ô và mọi chuyến hàng có lô đó. Chỉ những nơi đó cần **thu hồi**, tức là lấy hàng về.`},{type:"visual",svg:`<svg viewBox="0 0 360 190"><defs><marker id="wh7a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-soft" x="60" y="10" width="240" height="40" rx="8"/><text class="v-title" x="180" y="35" text-anchor="middle">Lot L-2026-07A: 300 cartons</text>
<line class="v-flow" x1="180" y1="50" x2="61" y2="110" marker-end="url(#wh7a)"/>
<line class="v-flow" x1="180" y1="50" x2="180" y2="110" marker-end="url(#wh7a)"/>
<line class="v-flow" x1="180" y1="50" x2="299" y2="110" marker-end="url(#wh7a)"/>
<rect class="v-box" x="8" y="110" width="106" height="44" rx="8"/><text class="v-title" x="61" y="128" text-anchor="middle">A-03-02-B</text><text class="v-small" x="61" y="146" text-anchor="middle">120 cartons</text>
<rect class="v-good" x="127" y="110" width="106" height="44" rx="8"/><text class="v-title" x="180" y="128" text-anchor="middle">SH-88 to shop</text><text class="v-small" x="180" y="146" text-anchor="middle">150 cartons</text>
<rect class="v-box" x="246" y="110" width="106" height="44" rx="8"/><text class="v-title" x="299" y="128" text-anchor="middle">B-01-01-A</text><text class="v-small" x="299" y="146" text-anchor="middle">30 cartons</text>
<text class="v-small v-muted" x="180" y="180" text-anchor="middle">Recall: search by lot number</text></svg>`,alt:"One lot of 300 cartons splits three ways. Bin A-03-02-B has 120. Shipment SH-88 to a shop has 150. Bin B-01-01-A has 30.",caption:`One lot splits into bins and shipments. Trace it in both directions.
VI: Một lô được chia vào các ô và chuyến hàng. Có thể truy theo cả hai chiều.`},{type:"visual",svg:`<svg viewBox="0 0 360 214"><defs><marker id="wh7b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="v-arrowhead" d="M0 0L10 5L0 10z"/></marker></defs>
<rect class="v-good v-pulse" x="10" y="20" width="340" height="44" rx="8"/><text class="v-title" x="22" y="40">Lot A: expires first</text><text class="v-small" x="22" y="56">2027-01-15 · 80 cartons</text>
<line class="v-flow" x1="180" y1="64" x2="180" y2="80" marker-end="url(#wh7b)"/>
<rect class="v-box" x="10" y="80" width="340" height="44" rx="8"/><text class="v-title" x="22" y="100">Lot B: expires next</text><text class="v-small" x="22" y="116">2027-03-20 · 120 cartons</text>
<line class="v-flow" x1="180" y1="124" x2="180" y2="140" marker-end="url(#wh7b)"/>
<rect class="v-box" x="10" y="140" width="340" height="44" rx="8"/><text class="v-title" x="22" y="160">Lot C: expires last</text><text class="v-small" x="22" y="176">2027-06-01 · 100 cartons</text>
<text class="v-small v-muted" x="10" y="204">Pick order: top row first</text></svg>`,alt:"Three lots ordered by expiry date. Lot A expires first, then Lot B, then Lot C. The picker takes from the top row first.",caption:`Pick the earliest expiry first. This rule is FEFO.
VI: Lấy lô hết hạn sớm nhất trước. Đây là quy tắc FEFO.`},{type:"list",items:[`Lot: a batch. Needs a lot number and an expiry date.
VI: Lô: một mẻ hàng. Cần số lô và hạn dùng.`,`Serial: one unit. Needs its own code.
VI: Serial: một đơn vị. Cần mã riêng.`,`FIFO: first in, first out.
VI: FIFO: nhập trước, xuất trước.`,`FEFO: first to expire, first out.
VI: FEFO: hết hạn trước, xuất trước.`]},{type:"text",text:`Use **FEFO** (first to expire, first out) for food and medicine. Use **FIFO** (first in, first out) when expiry does not matter. The WMS picks the lot by the chosen rule, so the picker does not decide.
VI: Dùng **FEFO** (hết hạn trước, xuất trước) cho thực phẩm và thuốc. Dùng **FIFO** (nhập trước, xuất trước) khi hạn dùng không quan trọng. WMS chọn lô theo quy tắc đã chọn, nên người lấy hàng không tự quyết.`},{type:"text",text:`A serial number is tracked one unit at a time. A rice cooker with serial **SN-100245** has its own bin, status and warranty. Serials must be unique. Scan the serial at receiving and at shipping, so the chain is complete.
VI: Số serial được theo dõi từng đơn vị một. Nồi cơm điện có serial **SN-100245** có ô, trạng thái và thời hạn bảo hành riêng. Serial phải là duy nhất. Hãy quét serial khi nhận và khi xuất, để chuỗi theo dõi đầy đủ.`},{type:"code",code:{lang:"csharp",text:`public class StockLine
{
    public string Lot { get; set; } = "";
    public DateOnly Expiry { get; set; }
    public int Qty { get; set; }
}

// FEFO: the earliest expiry with stock goes first.
var next = lines.Where(l => l.Qty > 0)
    .OrderBy(l => l.Expiry)
    .First();`}},{type:"example",title:"Rice cooker return",text:`A customer returns a rice cooker with serial SN-100245. The WMS shows it shipped to Hoa Mart on 3 March. The team knows the exact unit, so no guessing is needed.
VI: Một khách trả lại nồi cơm điện có serial SN-100245. WMS cho biết máy đã giao cho Hoa Mart ngày 3 tháng 3. Đội kho biết đúng chiếc máy đó, không cần đoán.`},{type:"text",text:`**Common mistake:** receiving food without a lot number or expiry date. The system then cannot do FEFO or a recall. Make lot and expiry required at receiving for lot-tracked items.
VI: **Lỗi hay gặp:** nhận thực phẩm mà không có số lô hay hạn dùng. Khi đó hệ thống không làm được FEFO hay thu hồi. Hãy bắt buộc nhập số lô và hạn dùng khi nhận các mặt hàng theo lô.`},{type:"exercise",title:`Count the cartons in a lot
VI: Đếm số thùng trong một lô`,task:`Lot L-2026-07A has 300 cartons. Bin A-03-02-B holds 120 cartons. Shipment SH-88 has 150 cartons. How many cartons are left? Then say which lot ships first: one expires on 2027-01-15, the other on 2027-03-20.
VI: Lô L-2026-07A có 300 thùng. Ô A-03-02-B chứa 120 thùng. Chuyến SH-88 có 150 thùng. Còn lại bao nhiêu thùng? Rồi cho biết lô nào xuất trước: một lô hết hạn 2027-01-15, lô kia hết hạn 2027-03-20.`,hint:`Subtract the bin and the shipment. Then pick the earlier expiry date.
VI: Trừ số thùng trong ô và chuyến hàng. Sau đó chọn ngày hết hạn sớm hơn.`,solution:`300 - 120 - 150 = 30 cartons left. The lot that expires on 2027-01-15 ships first, because FEFO picks the earliest expiry.
VI: 300 - 120 - 150 = 30 thùng còn lại. Lô hết hạn 2027-01-15 xuất trước, vì FEFO chọn hạn sớm nhất.`}],remember:`Lots track groups with an expiry date. Serials track single units.
VI: Lô theo dõi nhóm hàng có hạn dùng. Serial theo dõi từng đơn vị.`,questions:[{id:"warehouse.lot-serial.1",kind:"mcq",difficulty:"easy",prompt:`Which tracking type fits a single laptop?
VI: Loại theo dõi nào phù hợp với một máy tính xách tay?`,choices:["Serial number","Lot number","Bin code","Pick list"],answer:0,why:`A serial number is unique to one unit. A lot covers a whole batch.
VI: Serial là mã riêng của một máy. Lô bao gồm cả một mẻ hàng.`},{id:"warehouse.lot-serial.2",kind:"truefalse",difficulty:"easy",prompt:`Items in one lot share the same expiry date.
VI: Các hàng trong cùng một lô có chung hạn dùng.`,choices:["True","False"],answer:0,why:`A lot is made together, so the dates match. That is why a whole lot can be recalled as one group.
VI: Lô được làm cùng lúc nên ngày khớp nhau. Vì vậy cả lô có thể được thu hồi như một nhóm.`},{id:"warehouse.lot-serial.3",kind:"scenario",difficulty:"medium",prompt:`A shop has two lots of the same fish. Lot X expires in June. Lot Y expires in September. The picker takes Lot Y because it is closer. What should have happened?
VI: Một cửa hàng có hai lô cá giống nhau. Lô X hết hạn tháng 6. Lô Y hết hạn tháng 9. Người lấy hàng chọn lô Y vì gần hơn. Đáng lẽ phải xảy ra điều gì?`,choices:["The WMS should pick Lot X first, by FEFO","The picker should pick any lot that fits","Lot Y is correct because it was stored later","Expiry does not matter for canned fish"],answer:0,why:`FEFO picks the earliest expiry first. Lot X should leave first, to avoid waste.
VI: FEFO chọn hạn sớm nhất trước. Lô X phải xuất trước để tránh hàng hết hạn.`},{id:"warehouse.lot-serial.4",kind:"code",difficulty:"hard",prompt:`What does this print? Lot X expires first, but it has no stock.
VI: Đoạn này in ra gì? Lô X hết hạn trước nhưng không còn hàng.`,code:{lang:"csharp",text:`var lines = new[] {
    new StockLine { Lot = "X", Qty = 0,
        Expiry = new DateOnly(2026, 6, 1) },
    new StockLine { Lot = "Y", Qty = 5,
        Expiry = new DateOnly(2026, 9, 1) },
};
var next = lines.Where(l => l.Qty > 0)
    .OrderBy(l => l.Expiry).First();
Console.WriteLine(next.Lot);`},choices:["X","Y","Nothing is printed","An exception is thrown"],answer:1,why:`The filter drops lot X because its quantity is zero. So lot Y is the first with stock.
VI: Bộ lọc bỏ lô X vì số lượng bằng 0. Vì vậy lô Y là lô đầu tiên còn hàng.`}]}],cheatSheet:[{title:"Places · Vị trí",items:[{term:"Warehouse site · Kho",meaning:`The building or area that stores goods.
VI: Tòa nhà hoặc khu vực lưu trữ hàng.`},{term:"Zone · Khu vực",meaning:`A group of areas, such as dry or chilled.
VI: Nhóm các khu, ví dụ khô hoặc mát.`},{term:"Bin · Ô lưu trữ",meaning:`The smallest storage place, with its own code.
VI: Vị trí lưu trữ nhỏ nhất, có mã riêng.`},{term:"Bin code · Mã ô",meaning:`A code like A-03-02-B. Can be scanned and sorted.
VI: Mã như A-03-02-B. Quét và sắp xếp được.`},{term:"Reserve · Khu dự trữ",meaning:`Big storage for full pallets or cases.
VI: Kho lớn cho pallet hoặc thùng nguyên.`},{term:"Pick face · Khu lấy hàng",meaning:`Small area near packing, for quick picking.
VI: Khu nhỏ gần trạm đóng gói, để lấy hàng nhanh.`}]},{title:"Inbound and outbound · Nhập và xuất",items:[{term:"PO · Đơn mua hàng",meaning:`What you ordered from the supplier.
VI: Hàng bạn đã đặt mua từ nhà cung cấp.`},{term:"Receipt · Phiếu nhận hàng",meaning:`Received, accepted and damaged counts.
VI: Số đã nhận, số đạt và số hư.`},{term:"Put-away · Cất hàng",meaning:`Move received goods to the right bin.
VI: Đưa hàng đã nhận vào đúng ô.`},{term:"Pick list · Phiếu lấy hàng",meaning:`Bin codes and quantities, in walking order.
VI: Mã ô và số lượng, theo đường đi.`},{term:"Packing · Đóng gói",meaning:`Pack, check and label the box.
VI: Đóng thùng, kiểm tra và dán nhãn.`},{term:"Short pick · Thiếu khi lấy hàng",meaning:`The bin had less than the list said.
VI: Ô có ít hơn số ghi trên phiếu lấy hàng.`}]},{title:"Stock levels · Mức tồn",items:[{term:"Min · Mức tối thiểu",meaning:`Level that starts a replenishment move.
VI: Mức làm phát sinh lệnh bổ sung.`},{term:"Max · Mức tối đa",meaning:`The most a bin can hold.
VI: Số lượng nhiều nhất ô chứa được.`},{term:"Replenishment · Bổ sung",meaning:`Move stock from reserve to the pick face.
VI: Chuyển hàng từ dự trữ sang khu lấy hàng.`},{term:"Cycle count · Kiểm kê luân phiên",meaning:`Count a small group of bins each day.
VI: Đếm một nhóm nhỏ ô mỗi ngày.`},{term:"Blind count · Đếm mù",meaning:`The counter does not see the system number.
VI: Người đếm không thấy số hệ thống.`},{term:"Tolerance · Mức cho phép",meaning:`The gap allowed before a recount.
VI: Chênh lệch được phép trước khi đếm lại.`}]},{title:"Lots and serials · Lô và serial",items:[{term:"Lot · Lô",meaning:`A batch made together, with one expiry.
VI: Một mẻ làm cùng lúc, có chung hạn dùng.`},{term:"Serial · Số serial",meaning:`A unique code for one unit.
VI: Mã duy nhất cho một đơn vị.`},{term:"FIFO · Nhập trước, xuất trước",meaning:`First in, first out.
VI: Hàng vào trước thì ra trước.`},{term:"FEFO · Hết hạn trước, xuất trước",meaning:`First to expire, first out.
VI: Hàng hết hạn trước thì ra trước.`},{term:"Recall · Thu hồi",meaning:`Find and pull back every item in one lot.
VI: Tìm và thu lại mọi hàng thuộc một lô.`},{term:"Expiry date · Hạn dùng",meaning:`The last day the goods are safe to sell.
VI: Ngày cuối cùng hàng còn được bán.`}]}],assessment:[{id:"warehouse.assess.1",kind:"scenario",difficulty:"easy",prompt:`Mekong Foods has 300 bags of rice in the ERP. The WMS bins add up to 280 bags. Where should you look first?
VI: Mekong Foods có 300 bao gạo trong ERP. Các ô WMS cộng lại được 280 bao. Bạn nên tìm ở đâu trước?`,choices:["Delete 20 bags from the ERP at once","Ask the sales team to pick the rest","Find the 20 bags with no bin yet","Change every bin code to match the ERP"],answer:2,why:`The ERP counts 300 bags. The bins hold 280. So 20 bags are not in any bin. Check the put-away record for them.
VI: ERP đếm 300 bao. Các ô giữ 280 bao. Vậy 20 bao chưa nằm trong ô nào. Hãy kiểm tra phiếu cất hàng của chúng.`},{id:"warehouse.assess.2",kind:"debug",difficulty:"medium",prompt:`A shop finds expired fish on its shelf. The picker took the newest lot, not the oldest. The lot dates are in the WMS. What is the most likely cause?
VI: Một cửa hàng thấy cá hết hạn trên kệ. Người lấy hàng lấy lô mới nhất, không lấy lô cũ nhất. Ngày của các lô có trong WMS. Nguyên nhân khả năng cao nhất là gì?`,choices:["The fish cans were printed in the wrong colour","The picker chose a lot by hand, not by FEFO","The shop opened too many checkouts","The lot number was typed in capitals"],answer:1,why:`FEFO means the WMS picks the earliest expiry. A picker who chooses by hand can skip the oldest lot.
VI: FEFO nghĩa là WMS chọn hạn sớm nhất. Người tự chọn tay có thể bỏ qua lô cũ nhất.`},{id:"warehouse.assess.3",kind:"scenario",difficulty:"easy",prompt:`A truck brings 400 cans of fish. The team finds 10 cans with dented lids. What should the receipt record?
VI: Một xe mang về 400 hộp cá. Nhóm thấy 10 hộp bị móp nắp. Phiếu nhận nên ghi gì?`,choices:["Received 400, accepted 390, damaged 10","Received 390, accepted 390, damaged 0","Received 400, accepted 400, damaged 0","Received 10, accepted 390, damaged 0"],answer:0,why:`The truck had 400 cans. 10 are damaged, so 400 - 10 = 390 are accepted. Record all three numbers.
VI: Xe có 400 hộp. 10 hộp hư, nên 400 - 10 = 390 hộp đạt. Hãy ghi cả ba số.`},{id:"warehouse.assess.4",kind:"compare",difficulty:"medium",prompt:`A truck has 60 damaged boxes. Which way to record them is better?
VI: Một xe có 60 thùng hư. Cách ghi nhận nào tốt hơn?`,choices:["Add all boxes to stock, then fix it at month end","Record the damage later, when the supplier calls","Count only the boxes that look good on the truck","Record the damaged count at the dock, the same day"],answer:3,why:`Same-day records keep stock right. A late fix leaves damaged boxes looking sellable for days.
VI: Ghi nhận ngay trong ngày giúp tồn kho đúng. Sửa muộn khiến hàng hỏng trông như còn bán được nhiều ngày.`},{id:"warehouse.assess.5",kind:"scenario",difficulty:"medium",prompt:`Bin A-03-02-B holds 190 of its 200 bags. A new receipt of 50 bags is put away. What should the WMS do?
VI: Ô A-03-02-B đang chứa 190 trên 200 bao. Một phiếu nhận 50 bao được cất vào. WMS nên làm gì?`,choices:["Put all 50 bags there and allow 240","Put 10 bags there, 40 in the next bin","Put 50 bags there and ignore the limit","Stop the receipt and throw away 40 bags"],answer:1,why:`The bin has only 10 free. Fill it to 200, then send the other 40 bags to a bin with room.
VI: Ô chỉ còn trống 10 bao. Đổ đầy đến 200, rồi chuyển 40 bao còn lại sang ô khác còn chỗ.`},{id:"warehouse.assess.6",kind:"debug",difficulty:"hard",prompt:`Dry rice goes into the frozen zone. The put-away rule checks free space and bin code only. What is the most likely cause?
VI: Gạo khô bị đưa vào khu đông lạnh. Quy tắc cất hàng chỉ kiểm tra chỗ trống và mã ô. Nguyên nhân khả năng cao nhất là gì?`,choices:["The rice bags are too heavy for the bin","The frozen bin has too few shelves","The rule does not check the zone","The rice was counted twice at the dock"],answer:2,why:`Zone is a rule of its own. Without a zone check, the first bin with room wins.
VI: Khu là một quy tắc riêng. Nếu không kiểm tra khu, ô đầu tiên còn chỗ sẽ được chọn.`},{id:"warehouse.assess.7",kind:"scenario",difficulty:"medium",prompt:`A picker sees 15 bags in bin A-03-02-B. The pick list says 20. The order needs 30 bags of rice. What should the system do?
VI: Người lấy hàng thấy 15 bao trong ô A-03-02-B. Phiếu ghi 20. Đơn cần 30 bao gạo. Hệ thống nên làm gì?`,choices:["Raise a short pick and find the missing bags","Ship 15 bags and mark the order done","Change the pick list to say 15 bags","Wait until next week for the stock"],answer:0,why:`The bin is 5 bags short. The system records a short pick and finds the 5 bags in another bin with stock.
VI: Ô thiếu 5 bao. Hệ thống ghi nhận thiếu khi lấy hàng và tìm 5 bao ở ô khác có hàng.`},{id:"warehouse.assess.8",kind:"mcq",difficulty:"easy",prompt:`Which step catches a wrong item before the box leaves the warehouse?
VI: Bước nào bắt được hàng sai trước khi thùng rời kho?`,choices:["Print the pick list in colour","Store the boxes near the exit","Count the boxes after the truck leaves","Scan each item against the order at packing"],answer:3,why:`Scanning each item at packing checks it against the order. This happens before the box closes.
VI: Quét từng món khi đóng gói để đối chiếu với đơn. Việc này diễn ra trước khi đóng thùng.`},{id:"warehouse.assess.9",kind:"scenario",difficulty:"hard",prompt:`The pick bin for rice holds 35 bags. Min is 50 and max is 200. Reserve holds 90 bags. Rush hour starts now. How many bags should the task move?
VI: Ô lấy hàng gạo có 35 bao. Min là 50, max là 200. Dự trữ có 90 bao. Giờ cao điểm bắt đầu ngay. Lệnh nên chuyển bao nhiêu bao?`,choices:["Move 165 bags to reach the max of 200","Move 90 bags, all the reserve can give","Move nothing, because 35 is close to 50","Move 15 bags to reach the min of 50"],answer:1,why:`The task aims for max, which is 165 bags. Reserve has only 90, so the move is 90. The bin then holds 125, above min.
VI: Lệnh nhắm đến max, tức 165 bao. Dự trữ chỉ có 90 bao, nên chuyển 90 bao. Khi đó ô có 125 bao, trên mức min.`},{id:"warehouse.assess.10",kind:"compare",difficulty:"medium",prompt:`A warehouse has 1,000 items. Ten percent are high-value. Which cycle count plan is best?
VI: Một kho có 1.000 mặt hàng. 10% là hàng giá trị cao. Kế hoạch kiểm kê luân phiên nào tốt nhất?`,choices:["Count every item once a year, on one day","Count all items every day, all week","Count high-value items weekly, others less","Count only the cheap items each month"],answer:2,why:`High-value items cost the most when wrong. Count them often, like group A in the example.
VI: Hàng giá trị cao gây thiệt hại nhiều nhất khi sai. Hãy đếm thường xuyên, như nhóm A trong ví dụ.`}]},d=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),m=["warehouse","inventory","logistics","hr-payroll"],u=Object.assign({"./hr-payroll/index.ts":s,"./inventory/index.ts":r,"./logistics/index.ts":l,"./warehouse/index.ts":d}),h=m.map(t=>{var e;return(e=u[`./${t}/index.ts`])==null?void 0:e.default}).filter(t=>!!t),i=new Map,y=new Map;for(const t of h)for(const e of t.lessons){y.set(e.id,{lesson:e,category:t});for(const n of e.questions)i.set(n.id,{question:n,lesson:e,category:t})}const p=[...i.values()],x=t=>h.find(e=>e.id===t),v=[{id:"domain",title:"Warehouse, logistics & HR · Kho, logistics & nhân sự",note:"English + Tiếng Việt. Each topic ends with a competency check and a certificate."}],k=t=>t.group??"dev";export{v as G,p as a,k as b,h as c,x as g,y as l,i as q};
