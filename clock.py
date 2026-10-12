from datetime import datetime
from tkinter import Button, Frame, Label, Tk
from zoneinfo import ZoneInfo

TIMEZONES = [
    ("India", "Asia/Kolkata"),
    ("South Africa", "Africa/Johannesburg"),
    ("USA", "America/New_York"),
    ("Australia", "Australia/Sydney"),
]

THEMES = {
    "dark": {
        "window": "#0f172a",
        "card": "#111827",
        "primary": "#f8fafc",
        "muted": "#cbd5e1",
        "accent": "#38bdf8",
        "border": "#38bdf8",
        "button": "#1e293b",
        "button_active": "#334155",
    },
    "light": {
        "window": "#f1f5f9",
        "card": "#ffffff",
        "primary": "#172033",
        "muted": "#596579",
        "accent": "#007f9e",
        "border": "#cbd5e1",
        "button": "#e2e8f0",
        "button_active": "#cbd5e1",
    },
}


class WorldClockApp:
    def __init__(self, root):
        self.root = root
        self.root.title("World Digital Clock By Sourabh Kulkarni")
        self.root.geometry("1020x560")
        self.root.resizable(False, False)

        self.theme = "dark"
        self.clock_cards = []
        self.build_ui()

    def build_ui(self):
        palette = THEMES[self.theme]
        self.header = Frame(self.root, bg=palette["window"])
        self.header.pack(fill="x", padx=24, pady=(12, 0))

        title = Label(
            self.header,
            text="World Clock By Sourabh Kulkarni",
            font=("Segoe UI", 28, "bold"),
            fg=palette["primary"],
            bg=palette["window"],
            pady=12,
        )
        title.pack(side="left")
        self.title = title

        self.theme_button = Button(
            self.header,
            command=self.toggle_theme,
            relief="flat",
            bd=0,
            padx=12,
            pady=8,
            cursor="hand2",
        )
        self.theme_button.pack(side="right")

        self.grid = Label(self.root, bg=palette["window"])
        self.grid.pack(pady=10)

        for index, (country, timezone) in enumerate(TIMEZONES):
            card = Label(
                self.grid,
                width=28,
                height=9,
                bg=palette["card"],
                fg=palette["primary"],
                bd=2,
                relief="flat",
                highlightbackground=palette["border"],
                highlightthickness=1,
                padx=38,
                pady=24,
            )
            card.pack_propagate(False)
            card.grid(row=index // 2, column=index % 2, padx=30, pady=20, sticky="nsew")

            country_label = Label(
                card,
                text=country,
                bg=palette["card"],
                fg=palette["primary"],
                font=("Segoe UI", 18, "bold"),
            )
            country_label.pack(anchor="center", pady=(12, 8))

            time_label = Label(
                card,
                text="00:00:00",
                bg=palette["card"],
                fg=palette["accent"],
                font=("Segoe UI", 30, "bold"),
            )
            time_label.pack(anchor="center")

            date_label = Label(
                card,
                text="",
                bg=palette["card"],
                fg=palette["muted"],
                font=("Segoe UI", 11),
            )
            date_label.pack(anchor="center", pady=(8, 12))

            self.clock_cards.append({
                "frame": card,
                "country_label": country_label,
                "country": country,
                "timezone": timezone,
                "time": time_label,
                "date": date_label,
            })

        self.apply_theme()
        self.update_clocks()

    def apply_theme(self):
        palette = THEMES[self.theme]
        self.root.configure(bg=palette["window"])
        self.header.configure(bg=palette["window"])
        self.title.configure(bg=palette["window"], fg=palette["primary"])
        self.grid.configure(bg=palette["window"])

        for item in self.clock_cards:
            item["frame"].configure(
                bg=palette["card"],
                fg=palette["primary"],
                highlightbackground=palette["border"],
            )
            item["country_label"].configure(bg=palette["card"], fg=palette["primary"])
            item["time"].configure(bg=palette["card"], fg=palette["accent"])
            item["date"].configure(bg=palette["card"], fg=palette["muted"])

        next_theme = "light" if self.theme == "dark" else "dark"
        self.theme_button.configure(
            text=f"Switch to {next_theme} theme",
            bg=palette["button"],
            fg=palette["primary"],
            activebackground=palette["button_active"],
            activeforeground=palette["primary"],
        )

    def toggle_theme(self):
        self.theme = "light" if self.theme == "dark" else "dark"
        self.apply_theme()

    def update_clocks(self):
        for item in self.clock_cards:
            tz = ZoneInfo(item["timezone"])
            now = datetime.now(tz)
            item["time"].config(text=now.strftime("%H:%M:%S"))
            item["date"].config(text=now.strftime("%a, %d %b %Y"))
        self.root.after(1000, self.update_clocks)


if __name__ == "__main__":
    window = Tk()
    WorldClockApp(window)
    window.mainloop()
